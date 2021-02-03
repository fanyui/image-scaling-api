"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResizeRouter = void 0;
const express_1 = require("express");
const util_1 = require("../../util/util");
const router = express_1.Router();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let width = 100;
    let height = 100;
    const path = ` ${__dirname}/../../images/full/`;
    console.log(path);
    //       if(req.query.width){
    //           width = parseInt(req.query.width)
    //       }
    //       if(req.query.height){
    //           height = parseInt(req.query.height)
    //       }
    //const file = await readLocalFile('../../../images/full/fjord.jpg')
    const resize = util_1.filterImageFromURL("../../../images/full/fjord.jpg", 200, 200);
    res.send(resize);
}));
exports.ResizeRouter = router;
//# sourceMappingURL=resize.router.js.map