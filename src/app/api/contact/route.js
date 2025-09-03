import { sendContactUsEmail } from "@/utils/utils";

export async function POST(req) {
    try {
        // Uncomment on production
        // if (req.headers.get("origin") !== "https://websadroit.com") {
        //     return Response.json({ code: 403, status: false, message: "Forbidden: Invalid origin." });
        // }
        console.log("Received contact form submission:", req);
        let requestJSON;
        try {
            requestJSON = await req.json();
        } catch (err) {
            return Response.json({ code: 400, status: false, message: "Invalid or empty JSON body." });
        }
        if (!requestJSON || typeof requestJSON !== 'object') {
            return Response.json({ code: 400, status: false, message: "No data received." });
        }
        const { fullName, email, phone, service, message } = requestJSON;

        if (!fullName || !email) {
            return Response.json({ code: 400, status: false, message: "Full name and email are required." });
        }

        // Send the contact form data via email
        await sendContactUsEmail({
            fullName,
            email,
            phone,
            service,
            message
        });

        return Response.json({ code: 200, status: true, message: "Contact form submitted successfully." });
    } catch (error) {
        console.error("Error processing contact form:", error);
        return Response.json({ code: 500, status: false, message: "Internal server error." });
    }
}