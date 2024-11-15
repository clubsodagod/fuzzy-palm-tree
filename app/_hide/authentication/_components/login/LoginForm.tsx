'use client'
import React, { useEffect, useState } from 'react';
import styles from '../styles.module.css';
import { Button, TextField } from '@mui/material';
import { FormDocument, FormField, LoginFormType, } from '@/library/types/form/register';
import { useRegisterPageRefs } from '@/utility/refs/register-login-page-refs';
import { loginFormDocument } from '@/library/const/forms/login-register';
import DynamicAlert from '@/app/_hide/_components/common/DynamicAlert';
import { debounce, validateField } from '@/utility/functions';
import Link from 'next/link';
import { apiPath, clientDomain } from '@/library/const';
import { signIn, useSession } from 'next-auth/react';
import { useMDSession } from '@/app/_hide/_context/sub-context/SessionContext';
import { useRouter } from 'next/navigation';


const LoginForm = () => {

    const {session, status:sessionStatus} = useMDSession();
    
    let initialErrors = () => {
        return loginFormDocument.reduce((acc: any, f: FormField) => {
            acc[f.name] = false;
            return acc;
        }, {});
    };

    // initialize the form object
    const router = useRouter();
    const [loginForm, setLoginForm] = React.useState<LoginFormType | Partial<LoginFormType>>({});
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
            setLoginForm((prevForm) => ({
                ...prevForm,
                [name]: value, // Update the specific field by name
            }));
        
        };
        

        // Iterate over the loginFormDocument and add event listeners
        loginFormDocument.forEach((field) => {
        // Select the element based on the name property
        const inputElement = document.querySelector<HTMLInputElement>(`[name="${field.name}"]`);

        if (inputElement) {
            // Attach input event listener to observe value changes
            inputElement.addEventListener("input", handleInputChange);
        }
        });


        // Cleanup event listeners on unmount
        return () => {
        loginFormDocument.forEach((field) => {
            const inputElement = document.querySelector<HTMLInputElement>(`[name="${field.name}"]`);
            if (inputElement) {
            inputElement.removeEventListener("input", handleInputChange);
            }
        });
        };
    }, []);

    // Debounced validation function
    const validateForm = debounce((name: string, value: string) => {
        const isValid = validateField(name, value, loginForm);
        setError((prevErrors:any) => ({
        ...prevErrors,
        [name]: !isValid,  // Set error to true if not valid
        }));
    }, 300);  // Debounce delay of 300ms

    // useEffect to observe changes to loginForm and validate accordingly
    useEffect(() => {
        const validateOnChange = (name: keyof LoginFormType, value: string | undefined) => {
            if (value !== undefined) {
                validateForm(name, value);  // Call debounced validation
            }
        };

        Object.keys(loginForm).forEach((fieldName) => {
          // Type assertion to let TypeScript know that fieldName is a valid key
            const field = fieldName as keyof LoginFormType;
            validateOnChange(field, loginForm[field]);
        });
    }, [loginForm, validateForm]);

    const handleDynamicSubmit = async (event:Event,form:LoginFormType,url:string) => {

        event.preventDefault();

        const user = {user:loginForm};
        
        try {

            await signIn('credentials', {
                credential:loginForm.email, secret:loginForm.password
            })
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
            
            {/* login form */}
            <form
            className={`${styles.form} form`}
            id='register-form'
            ref={form}
            >

                {
                    loginFormDocument.map((f:FormField,i:number)=>{
                        if (f.type === "input") {
                            let field:string = f.name;
                            if(error[f.name]){
                                return (
                                    <TextField 
                                        error
                                        key={`form-field: ${f.label}`}
                                        variant='outlined' 
                                        className={``}
                                        value={loginForm[f.name as keyof LoginFormType] || ""} 
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
                                    value={loginForm[f.name as keyof LoginFormType] || ""} 
                                    id={`register-form-${f.name}`} label={f.label} type={f.subtype}
                                    name={f.name}
                                    ref={firstName}
                                />
                            )
                        }
                    })
                }

                <div className={`${styles.btnTextCtn} btnTextCtn`}>
                    <p className={`${styles.athQuestionText} authQuestionText`}>
                        Not apart of the <span className={`${styles.pearlBoxText} pearlBoxText`}>Pearl Box</span> community? <Link href={`/authentication/register`}><span className={`${styles.loginText} loginText`}>Create account</span></Link>.
                    </p>                    
                </div>


                <Button variant='contained' className={`${styles.register}`}
                name="registerButton" type="button" onClick={(event:Event)=>{handleDynamicSubmit(event,loginForm as LoginFormType, `/api/user/create`);
                }}
                ref={registerButton} 
                >
                    Login
                </Button>

            </form>
        </div>
    )
}

export default LoginForm;