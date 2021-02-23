"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const response_api_1 = require("../server/response_api");
const mainRouter = express_1.Router();
const responseApi = new response_api_1.ResponseApi();
mainRouter.get('/', (_, w) => {
    responseApi.response(w, 200, { ok: true, response: 'Todo bien' });
});
mainRouter.get('/distancematrix', (r, w) => {
    const url = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=-0.156655,-78.4803317&destinations=-0.156442,%20-78.480138&key=AIzaSyBernbrysD5h9fJB2Uws1hermcdf1Bm3sw";
});
exports.default = mainRouter;
//# sourceMappingURL=main.router.js.map