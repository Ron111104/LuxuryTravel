import { serialize } from "cookie";

export default function handler(req, res) {
    if (req.method === "POST") {
        const { username } = req.body;

        res.setHeader("Set-Cookie", serialize("user", username, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
            maxAge: 60 * 60 * 24 * 7,
            path: "/",
        }));

        res.status(200).json({ message: "Cookie set successfully!" });
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}
