import { IUser } from "@/app/_database/models/user";
import  { DefaultSession } from "next-auth";




//src/types/next-auth.d.ts


declare module "next-auth" {
    interface Session extends DefaultSession {
        user: IUser | null;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        userId: string;
    } 
}