const express = require("express");
const cors=require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/api/greet", (req, res) => {
    const name = req.query.name;

    if (!name) {
        return res.json({ message: "Name is required!!" });
    }

    res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
