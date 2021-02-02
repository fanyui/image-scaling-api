"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 3000;
const index_router_1 = require("./controller/index.router");
app.use('/', index_router_1.IndexRouter);
app.get('/try', (req, res) => {
    console.log(" I received a request");
    res.send("it worked.");
});
// app.listen(3000 => function(){
//     console.log("app is listenting on port 3000", port)
// })
app.listen(3000, () => {
    console.log('listening on port 3000');
});
//# sourceMappingURL=index.js.map