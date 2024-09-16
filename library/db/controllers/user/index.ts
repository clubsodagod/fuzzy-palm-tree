import { RegisterForm } from "@/library/types/form/register";
import { connectToMongoDB } from "../../db";
import { UserModel } from "../../models";
import { IUser } from "../../models/user";
require('dotenv').config();
import { v4 as uuidv4 } from 'uuid';
import bcrypt from "bcrypt"
import { clientDomain, fromEmail } from "@/library/const";
import { useRegisterHtmlContent as registerHtmlContent } from "@/library/const/html-content/register";

const sgMail = require('@sendgrid/mail')


const sendgridKey: string = process.env.NEXT_PUBLIC_SENDGRID_API_KEY as string ;

export const createNewCredentialsUser = async (user:RegisterForm) => {

    // validate user registration fields
    let error = await formFieldMiddleware(user);

    // validate form fields
    if(error) {
        return error;
    } 
    
    // connect to DB
    await connectToMongoDB();

    // validate user is unique

    // create new user
    const newUser:IUser = new UserModel(user);
    console.log(newUser, "which line");
    
    // validate new user created is of the correct type and exist
    if (!newUser) {
        let errorMessage:string = "User was not created successfully.";
        return errorMessage;
    }

    const saltRounds = 15;
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);
    const verificationToken = uuidv4();
    const expirationDate = new Date();
    expirationDate.setHours(expirationDate.getHours() + 24);

    newUser.password = hashedPassword;
    newUser.verificationToken = verificationToken;
    newUser.verificationTokenExpiration = expirationDate;

    // persist new user
    newUser.save();

    // send user a message to verify email
            
      // Create the verification link with the verification token
      const verificationLink = `localhost:3000/authentication/register/verify?token=${verificationToken}&username=${newUser.username}`;
            
      // set sengrid key
      sgMail.setApiKey(sendgridKey);

      // create email object *task - type this object correctly, and create a function
      const msg:any = {
        to: newUser.email,
        from: fromEmail,
        subject: `Verify Your Email ${newUser.firstName}`,
        html: registerHtmlContent(verificationLink,newUser), 
      };

      // create email sending function
      const email = async() => await sgMail.send(msg);
      
      // call function to send email
      email()
      
    // pass the user to the next function
    return newUser;
}

export const userExist = async (username:string, email:string) => {

  if(username === "" || username === undefined || email === "" || email === undefined) {return {status:null, message:"No email or username provided."}}

  try {

    // connect to database
    await connectToMongoDB();

    // search database by username to find user
    const usernameExist = await UserModel.findOne({username});
    

    // search database by email to find user
    const emailExist = await UserModel.findOne({email});

    if(usernameExist || emailExist){
      return true
    }
    return false
  } catch (error) {
    return error
  }

}

// Define a type for the input object
export type FormFieldInput = {
    email?: string;
    confirmEmail?: string;
    password?: string;
    confirmPassword?: string;
    username?: string;
  };
  
// Update the middleware function type to accept the object
export type UseFormFieldMiddleware = (fields: FormFieldInput) => Promise<string | null>;
  
// Implement the middleware function
export const formFieldMiddleware: UseFormFieldMiddleware = async({
  email,
  confirmEmail,
  password,
  confirmPassword,
  username,
}: FormFieldInput) => {
  // Ensure at least one argument is provided
  if (!email && !confirmEmail && !password && !confirmPassword && !username) {
    return "At least one field is required.";
  }

  const duplicateUser = await userExist(username!, email!);

  console.log(duplicateUser);
  

  if (duplicateUser) {
    return "There already exist a user with that email or password."
  }
  // Switch statement to validate provided fields
  switch (true) {
    // Check email validity
    case !!email:
      if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email!)) {
        return "Invalid email address.";
      }
      break;

    // Check if email matches confirmation
    case !!confirmEmail:
      if (email !== confirmEmail) {
        return "Emails do not match.";
      }
      break;

    // Check password validity
    case !!password:
      if (password!.length < 8) {
        return "Password must be at least 8 characters long.";
      }
      if (!/[A-Z]/.test(password!) || !/[a-z]/.test(password!) || !/\d/.test(password!)) {
        return "Password must include at least one uppercase letter, one lowercase letter, and one number.";
      }
      break;

    // Check if password matches confirmation
    case !!confirmPassword:
      if (password !== confirmPassword) {
        return "Passwords do not match.";
      }
      break;

    // Check username validity
    case !!username:
      if (username!.length < 3) {
        return "Username must be at least 3 characters long.";
      }
      if (!/^[a-zA-Z0-9_]+$/.test(username!)) {
        return "Username can only contain letters, numbers, and underscores.";
      }
      break;

    default:
      return null; // No errors, valid input
  }

  return null; // If everything is valid
};
