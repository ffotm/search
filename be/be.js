import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";


const __dirname = dirname(fileURLToPath(
    import.meta.url));


const app = express();
const port = 3000;

app.use(express.static(join(__dirname, "..", "public")));


app.get("/", (req, res) =>
    res.sendFile(join(__dirname, "..", "public", "index.html"))
);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});