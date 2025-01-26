import express from "express";
import {alg1} from "./TensorFlowAlgorithms/alg1";
const app = express();
const port = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("Hello World!")
});
app.get("/tf-version", (req, res) => {
    res.send(alg1());
});
app.listen(port, () => {
    console.log(`Server started... listening on port ${port}`)
})