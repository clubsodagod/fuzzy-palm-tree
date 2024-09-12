import { Photo, Video } from ".";



export interface User {
    firstName: string;
    lastName:string;
    username:string;
    email:string;
    role:string;
    createdAt:Date;
    updatedAt:Date;
    photo?:Photo;
    video?:Video;
}