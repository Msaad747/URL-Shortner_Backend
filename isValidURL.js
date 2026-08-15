export const isValidURL = (req,res,next) => {
    try {
        new URL(req.body.org_URL);
        next();
    } catch (error) {
        res.status(400).json({ error: "Invalid URL" });
    }
}