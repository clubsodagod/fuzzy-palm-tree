import { FormDocument, RegisterForm } from "@/library/types/form/register";




export const registerFormDocument:FormDocument = [
    {
        name: "firstName",
        type: "input",
        subtype: "text",
        label: "First Name",
    },
    {
        name: "lastName",
        type: "input",
        subtype: "text",
        label: "Last Name",
    },
    {
        name: "username",
        type: "input",
        subtype: "text",
        label: "Username",
    },
    {
        name: "email",
        type: "input",
        subtype: "email",
        label: "Email",
    },
    {
        name: "emailConfirm",
        type: "input",
        subtype: "email",
        label: "Confirm Email",
    },
    {
        name: "password",
        type: "input",
        subtype: "password",
        label: "Password",
    },
    {
        name: "confirmPassword",
        type: "input",
        subtype: "password",
        label: "Confirm Password",
    },
]

export const loginFormDocument:FormDocument = [
    {
        name: "email",
        type: "input",
        subtype: "email",
        label: "Email",
    },
    {
        name: "password",
        type: "input",
        subtype: "password",
        label: "Password",
    },
]