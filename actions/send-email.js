"use server";
import { Resend } from "resend";

export async function sendEmail({to,subject,react}){
    const resend=new Resend(process.env.RESEND_API_KEY||"");
    try {
        const data=await resend.emails.send({
            from:"PocketTrackApp <onboarding@resend.dev>",
            to,
            subject,
            react,
        })
        return {success:true,data};
    } catch (error) {
        
        console.error("Failed to Send Email:",error);
        return {success:false,error};
    }
}

// import { Resend } from "resend";
// import { render } from "@react-email/render";

// export async function sendEmail({ to, subject, react }) {
//     const resend = new Resend(process.env.RESEND_API_KEY || "");
//     try {
  
//     // Correct usage: Render the component to a string first
//     const html = render(react); 

//     const data = await resend.emails.send({
//       from: "PocketTrack App <onboarding@resend.dev>",
//       to,
//       subject,
//       html, // Pass the rendered HTML string here
//     });

//     return { success: true, data };
//   } catch (error) {
//     console.error("Failed to Send Email:", error);
//     return { success: false, error: error.message };
//   }
// }

// import { Resend } from "resend";
// import { render } from "@react-email/render";

// const resend = new Resend(process.env.RESEND_API_KEY || "");

// export async function sendEmail({ to, subject, react }) {
//   try {
//     const html = render(react);
//     const data = await resend.emails.send({
//       from: "PocketTrack App <onboarding@resend.dev>",
//       to,
//       subject,
//       html,
//     });
//     console.log("Email sent successfully.");
//     return { success: true, data };
//   } catch (error) {
//     console.error("Failed to Send Email:", error);
//     return { success: false, error: error.message };
//   }
// }