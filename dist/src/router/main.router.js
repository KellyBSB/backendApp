"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const response_api_1 = require("../server/response_api");
const requestApp = require('request');
const mainRouter = express_1.Router();
const responseApi = new response_api_1.ResponseApi();
mainRouter.get('/', (_, w) => {
    responseApi.response(w, 200, { ok: true, response: 'Todo bien' });
});
mainRouter.get('/distancematrix', (r, w) => {
    requestApp('https://maps.googleapis.com/maps/api/distancematrix/json?origins=-0.156655,-78.4803317&destinations=-0.156442,%20-78.480138&key=AIzaSyBernbrysD5h9fJB2Uws1hermcdf1Bm3sw', function (error, response, body) {
        console.error('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        if (!error) {
            responseApi.response(w, 200, JSON.parse(body));
        }
    });
});
exports.default = mainRouter;
//# sourceMappingURL=main.router.js.map