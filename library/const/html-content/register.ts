import { IUser } from "@/app/_database/models/user";


      // HTML content for the email with background color
export const useRegisterHtmlContent = (verificationLink:string, newUser:IUser, ) => ( 
    `
        <html>
            <body style="background-color: #f0f0f0; padding: 5vh 15vh;">
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                    <td align="center">
                        <h1 style="color: #333; margin-bottom: 20px;">Welcome to Pearl Box!</h1>
                        <p style="color: #555;">Hey ${newUser.firstName},</p>
                        <p style="color: #555;">Thank you for joining Pearl Box! To activate your account and start exploring, please click the verification link below:</p>
                        <a href="${verificationLink}" style="background-color: #007bff; color: #fff; padding: 10px 20px; text-decoration: none; display: inline-block; border-radius: 5px;">Verify Email</a>
                        <p style="color: #555;">Best Regards,</p>
                        <p style="color: #555;">Maliek Davis</p>
                    </td>
                    </tr>
                </table>
            </body>
        </html>
    `
      );