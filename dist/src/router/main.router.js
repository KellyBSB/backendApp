"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const response_api_1 = require("../server/response_api");
const mainRouter = express_1.Router();
const responseApi = new response_api_1.ResponseApi();
mainRouter.get('/', (_, w) => {
    responseApi.response(w, 200, { ok: true, response: 'Todo bien' });
});
exports.default = mainRouter;
//# sourceMappingURL=main.router.js.map