import { parse } from "cookie";

export default function handler(req, res) {
    const cookies = parse(req.headers.cookie || "");
    const user = cookies.user || "Guest";

    res.status(200).json({ username: user });
}
