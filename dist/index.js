"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./src/server/server"));
const main_router_1 = __importDefault(require("./src/router/main.router"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const server = server_1.default.instance;
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
server.app.use(cors_1.default({
    origin: true,
    credentials: true
}));
server.app.use('/', main_router_1.default);
server.start(() => {
    console.log(`Server is running in ${server.port} port`);
});
//# sourceMappingURL=index.js.map