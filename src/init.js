import app from "./server.js";

const PORT  = 4040;
const handleListening = () => {
    console.log(`Server Listen https:/localhost:${PORT}`);
}

app.listen(PORT, handleListening)
