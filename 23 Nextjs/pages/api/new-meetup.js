function handler(req, res)
{
    if(req.method === "POST")
    {
        const data = req.body;
        // const {title, description, url} = data;

        res.status(200).json({message: "posted successfully"})
    }
}

export default handler;