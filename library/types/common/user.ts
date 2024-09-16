import { IUser } from "@/library/db/models/user";
import { Photo, Video } from ".";
import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";




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