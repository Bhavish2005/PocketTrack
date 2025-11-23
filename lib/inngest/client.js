import { max } from "date-fns";
import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "pocketrack",name:"PocketTrack",retryFunction: async(attempt)=>({
    delay: 1000 * Math.pow(2, attempt), // Exponential backoff
    maxAttempts: 2, // Maximum number of attempts
}),
 });