import { Router, Request, Response, request } from 'express';
import { ResponseApi } from '../server/response_api';

const requestApp = require('request');

const mainRouter = Router();
const mainRoouterDireciones = Router();
const mainRouterCalles= Router();
const mainRouterDistrito = Router();
const responseApi = new ResponseApi();
const responseApi1 = new ResponseApi();


mainRouter.get('/', (_: Request, w: Response) => {
  responseApi.response(w, 200, {ok: true, response: 'Todo bien'});
});

mainRouter.get('/distancematrix', (r: Request, w: Response) => {
  const origins = r.query.origins;
  const destinations = r.query.destinations;
  const key = r.query.key;
  requestApp(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origins}&destinations=${destinations}&key=${key}`, 
    function (error: any, response: any, body: any) {
      console.error('error:', error);
      console.log('statusCode:', response && response.statusCode);
      console.log('body:', body);
      if (!error) {
        responseApi.response(w, 200, JSON.parse(body));
      }
    }
  );
});

mainRoouterDireciones.get('/directions',(r:Request, w:Response)=>{
  const origins = r.query.origins;
  const destinations = r.query.destinations;
  const key = r.query.key;
  requestApp(
    `https://maps.googleapis.com/maps/api/directions/json?origins=${origins}&destinations=${destinations}&mode=walking&key=${key}`,
    function (error:any, response:any, body:any){
      console.error('error:',error);
      console.log('statusCode:', response && response.statusCode );
      console.log('body:', body);
      if(!error){
        responseApi.response(w,200,JSON.parse(body))
      }
    }

  );

});
export default mainRouter;