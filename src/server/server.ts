import express from 'express';
import socketIO from 'socket.io';
import http from 'http';

/**
 * Clase para el manejo del servicio y sockets
 * 
 * @remarks
 * Esta clase pertenece a la columna vertebral del servicio
 */
export default class Server {
  /**
   * Variable estática de la instancia del socket, cumple patrón Singleton
   */
  private static _instance: Server;

  /**
   * Variable pública de tipo express application
   */
  public app: express.Application;
  /**
   * Variable del puerto donde se servirá la api
   */
  public port: number;
  /**
   * Variable pública del socket de la aplicación
   */
  public io: socketIO.Server;
  /**
   * Variable privada para el manejo del servicio, de tipo express http
   */
  private httpServer: http.Server;

  /**
   * @remarks
   * Esta clase es la constructura de la clase, carga los objetos internos
   * con valores del enviroment y otros propios de sus clases
   */
  private constructor() {
    this.app = express();
    this.port = 2000;
    this.httpServer = new http.Server(this.app);
    this.io = socketIO( this.httpServer );
    this.listenSocket();
  }

  /**
   * Función que retorna la instancia para cumplir el patrón Singleton
   * @remarks
   * Esta función no recibe parámetros, y sirve para saber si ya hay una instancia la retorne, de lo contrario crea una nueva
   * @returns Retorna la instancia creada `this._instance` o crea una nueva para retornarla `this._instance = new this()`
   */
  public static get instance() {
    return this._instance || (this._instance = new this());
  }

  /**
   * Función para la escucha de sockets
   * 
   */
  private listenSocket() {
    this.io.on('connection', cliente => {
      console.log('cliente conectado', cliente.id);
    });
  }

  start(callback: Function) {
    this.httpServer.listen(this.port, callback());
  }
}