'use client'
import React, { useEffect, useState } from 'react';
import styles from '../styles.module.css';
import { Button, TextField } from '@mui/material';
import { FormDocument, FormField, RegisterForm as RegisterFormType } from '@/library/types/form/register';
import { useRegisterPageRefs } from '@/utility/refs/register-login-page-refs';
import { registerFormDocument } from '@/library/const/forms/login-register';
import DynamicAlert from '@/app/components/common/DynamicAlert';
import { debounce, validateField } from '@/utility/functions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';


const RegisterForm = () => {

    const { data:session} = useSession();
    console.log(session);
    

    // initialize router
    const router = useRouter();

    let initialErrors = () => {
        return registerFormDocument.reduce((acc: any, f: FormField) => {
            acc[f.name] = false;
            return acc;
        }, {});
    };

    console.log(initialErrors());
    
    // initialize the form object
    const [registerForm, setRegisterForm] = React.useState<RegisterFormType | Partial<RegisterFormType>>({});
    const [error, setError] = useState(initialErrors())
    const [status, setStatus] = React.useState<number>(0);
    const [alertMessage, setAlertMessage] = React.useState<string>("");

    // destructure register form refs
    const {
        firstName, lastName, username, email, confirmEmail, password, confirmPassword, registerButton, form
    } = useRegisterPageRefs();

    // attach object listeners to elements to observe value changes
    useEffect(() => {
        // Function to handle change events for each input
        const handleInputChange = (event: Event) => {
            const target = event.target as HTMLInputElement;
            const { name, value } = target;
            console.log(value);
            
            // Dynamically update the register form state
            setRegisterForm((prevForm) => ({
                ...prevForm,
                [name]: value, // Update the specific field by name
            }));
        
        };
        

        // Iterate over the registerFormDocument and add event listeners
        registerFormDocument.forEach((field) => {
        // Select the element based on the name property
        const inputElement = document.querySelector<HTMLInputElement>(`[name="${field.name}"]`);

        if (inputElement) {
            // Attach input event listener to observe value changes
            inputElement.addEventListener("input", handleInputChange);
        }
        });


        // Cleanup event listeners on unmount
        return () => {
        registerFormDocument.forEach((field) => {
            const inputElement = document.querySelector<HTMLInputElement>(`[name="${field.name}"]`);
            if (inputElement) {
            inputElement.removeEventListener("input", handleInputChange);
            }
        });
        };
    }, []);

    // Debounced validation function
    const validateForm = debounce((name: string, value: string) => {
        const isValid = validateField(name, value, registerForm);
        setError((prevErrors:any) => ({
        ...prevErrors,
        [name]: !isValid,  // Set error to true if not valid
        }));
    }, 300);  // Debounce delay of 300ms

    // useEffect to observe changes to registerForm and validate accordingly
    useEffect(() => {
        const validateOnChange = (name: keyof RegisterFormType, value: string | undefined) => {
            if (value !== undefined) {
                validateForm(name, value);  // Call debounced validation
            }
        };
        
        Object.keys(registerForm).forEach((fieldName) => {
          // Type assertion to let TypeScript know that fieldName is a valid key
            const field = fieldName as keyof RegisterFormType;
            validateOnChange(field, registerForm[field]);
        });
    }, [registerForm, validateForm]);

    const handleDynamicSubmit = async (event:Event,form:RegisterFormType,url:string) => {

        event.preventDefault();

        const user = {user:registerForm};
        
        try {
            const response = await fetch("/api/user/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // Specify that the request body is JSON
                },
                body: JSON.stringify(user), // Send the serialized form data
            });
    
            // Parse the JSON response
            const res = await response.json();
    
            setStatus(response.status);
            setAlertMessage(res.message)

            // create clear form and update status and alert message function
            const handleClear = () => {
                setTimeout(()=> {
                    setStatus(0);
                    setAlertMessage("");
                },3000)
            }            

            // Check for errors
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

        } catch (error) {
            console.error('Failed to submit form:', error);
        }
    };
    
    return (
        <div
            className={`${styles.formWrapper} formWrapper`}
            id='register-form'
        >
            {/* dynamic alert component */}
            <div
                className={`${styles.alertWrapper} alertWrapper`}
                id='register-form'
            >
                {
                    status > 0 &&
                    <DynamicAlert 
                        status={status}
                        message={alertMessage}
                    />                    
                }
            </div>
            
            {/* registration form */}
            <form
            className={`${styles.form} form`}
            id='register-form'
            ref={form}
            >

                {
                    registerFormDocument.map((f:FormField,i:number)=>{
                        if (f.type === "input") {
                            let field:string = f.name;
                            if(error[f.name]){
                                return (
                                    <TextField 
                                        error
                                        key={`form-field: ${f.label}`}
                                        variant='outlined' 
                                        className={``}
                                        value={registerForm[f.name as keyof RegisterFormType] || ""} 
                                        id={`register-form-${f.name}`} label={f.label} type={f.subtype}
                                        name={f.name}
                                        ref={firstName}
                                    />
                                )
                            }
                            return (
                                <TextField 
                                    key={`form-field: ${f.label}`}
                                    variant='outlined' 
                                    className={``}
                                    value={registerForm[f.name as keyof RegisterFormType] || ""} 
                                    id={`register-form-${f.name}`} label={f.label} type={f.subtype}
                                    name={f.name}
                                    ref={firstName}
                                />
                            )
                        }
                    })
                }

                <div className={`${styles.btnTextCtn} btnTextCtn`}>
                    <p>
                        Already have an account? <Link href={`/authentication/login`}><span className={`${styles.loginText} loginText`}>Login</span></Link>.
                    </p>                    
                </div>


                <Button variant='contained' className={`${styles.register}`}
                name="registerButton" type="button" onClick={(event:Event)=>{handleDynamicSubmit(event,registerForm as RegisterFormType, `/api/user/create`);
                }}
                ref={registerButton} 
                >
                    Register
                </Button>

            </form>
        </div>
    )
}

export default RegisterForm