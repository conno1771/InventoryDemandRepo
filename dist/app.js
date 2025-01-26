"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const alg1_1 = require("./TensorFlowAlgorithms/alg1");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/tf-version", (req, res) => {
    res.send((0, alg1_1.alg1)());
});
app.listen(port, () => {
    console.log(`Server started... listening on port ${port}`);
});
//# sourceMappingURL=app.js.map