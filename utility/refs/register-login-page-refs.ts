import { useRef, RefObject } from "react";
import * as THREE from 'three'

// Define types for the references
type RefArray = RefObject<HTMLDivElement>[];

export type RefIDObject = {
    ref: RefObject<HTMLDivElement>;
    id: string;
}

// Custom hook to create and manage refs
export const useRegisterPageRefs = (): {
    firstName: RefObject<HTMLInputElement>;
    lastName: RefObject<HTMLInputElement>;
    username: RefObject<HTMLInputElement>;
    email: RefObject<HTMLInputElement>;
    confirmEmail: RefObject<HTMLInputElement>;
    password: RefObject<HTMLInputElement>;
    confirmPassword: RefObject<HTMLInputElement>;
    registerButton: RefObject<HTMLButtonElement>;
    form: RefObject<HTMLFormElement>;
} => {
    const firstName = useRef<HTMLInputElement>(null);
    const lastName = useRef<HTMLInputElement>(null);
    const username = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const confirmEmail = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const confirmPassword = useRef<HTMLInputElement>(null);
    const registerButton = useRef<HTMLButtonElement>(null);
    const form = useRef<HTMLFormElement>(null);



    return {
        firstName, lastName, username, email, confirmEmail, password, confirmPassword, registerButton, form
    };
};
