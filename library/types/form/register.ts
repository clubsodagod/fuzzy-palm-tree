


export interface Form {
    firstName:string;
    lastName:string;
    email:string;
}

export interface RegisterForm extends Form {
    confirmEmail:string;
    username:string;
    password:string;
    confirmPassword:string;
}
export interface LoginFormType {
    email:string;
    password:string;
}
export type FormField = {
    name: string;
    type: "input" | "checkbox" | "radio" | "select"
    subtype: "text" | "email" | "password" ;
    label: string;
}

export type FormDocument = FormField[];