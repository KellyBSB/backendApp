"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseApi = void 0;
class ResponseApi {
    response(w, status, data) {
        if (status == 200 || status == 204) {
            w.status(status).json(data);
        }
        else {
            w.status(status).json({
                status: false,
                response: data
            });
        }
    }
}
exports.ResponseApi = ResponseApi;
//# sourceMappingURL=response_api.js.map