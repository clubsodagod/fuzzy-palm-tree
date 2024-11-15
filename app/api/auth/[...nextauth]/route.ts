import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { connectToMongoDB } from "@/library/db/db";
import { UserModel } from "@/app/_database/models";



const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      credentials: {},
      async authorize(credentials, req) {

        // connect to database
        await connectToMongoDB();

        // destructure credentials object
        const {credential, secret} = credentials as {
          credential: string,
          secret: string
        };

        console.log(credential);
        

        // validate user existence
        const userByEmail = await UserModel.findOne({email:credential});
        const userByUsername = await UserModel.findOne({username:credential});

        console.log(userByEmail, userByUsername);
        
        

      

        

        
        if (userByUsername){

          // Map Mongoose document to the expected `User` object
          const user= {
            id: userByUsername.id, // Convert Mongoose ObjectId to string for `id`
            email: userByUsername.email,
            name: userByUsername.firstName,
          };


          // return user
          return user 

        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null
  
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  pages: {
      signIn: "/authentication/login",      // URL for the login page
      signOut: "/authentication/logout",    // URL for the logout page
      error: "/authentication/login",       // URL for error page (e.g., for displaying authentication errors)
      verifyRequest: "/authentication/verify-request/verify", // URL for request to verify email
      newUser: "/me/account/settings",              // URL for new user registration (set to null if you don't have this page)
  },
  session: {
      strategy: "jwt",
  },
  callbacks: {
      async jwt({ token, user, trigger, session, }) {
        console.log(user);
        token.accessId = user;
        console.log(token.accessId);
        
        
        return token;
      },
      async session({ session, token, user }) {
        const userInfo =  await UserModel.findById(token.sub).populate('');
        
      session.user = userInfo;
      console.log(session.user);
      
      return session;
      },
  },
})

export { handler as GET, handler as POST }