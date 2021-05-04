"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_io_1 = __importDefault(require("socket.io"));
const http_1 = __importDefault(require("http"));
/**
 * Clase para el manejo del servicio y sockets
 *
 * @remarks
 * Esta clase pertenece a la columna vertebral del servicio
 */
class Server {
    /**
     * @remarks
     * Esta clase es la constructura de la clase, carga los objetos internos
     * con valores del enviroment y otros propios de sus clases
     */
    constructor() {
        this.app = express_1.default();
        this.port = 2000;
        this.httpServer = new http_1.default.Server(this.app);
        this.io = socket_io_1.default(this.httpServer);
        this.listenSocket();
    }
    /**
     * Función que retorna la instancia para cumplir el patrón Singleton
     * @remarks
     * Esta función no recibe parámetros, y sirve para saber si ya hay una instancia la retorne, de lo contrario crea una nueva
     * @returns Retorna la instancia creada `this._instance` o crea una nueva para retornarla `this._instance = new this()`
     */
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    /**
     * Función para la escucha de sockets
     *
     */
    listenSocket() {
        this.io.on('connection', cliente => {
            console.log('cliente conectado', cliente.id);
        });
    }
    start(callback) {
        this.httpServer.listen(this.port, callback());
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map