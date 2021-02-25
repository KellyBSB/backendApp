import { Router, Request, Response, request } from 'express';
import { ResponseApi } from '../server/response_api';

const requestApp = require('request');

const mainRouter = Router();
const responseApi = new ResponseApi();


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

mainRouter.get('/directions',(r:Request, w:Response)=>{
  try {
    const origins = r.query.origins;
    const destinations = r.query.destinations;
    const key = r.query.key;
    requestApp(
      `https://maps.googleapis.com/maps/api/directions/json?origin=${origins}&destination=${destinations}&mode=walking&key=${key}`,
      function (error:any, response:any, body:any){
        console.error('error:',error);
        console.log('statusCode:', response && response.statusCode );
        console.log('body:', body);
        if(!error){
          responseApi.response(w,200,JSON.parse(body))
        }
      }

    );
  } catch (error) {
    console.log('error directions', error);
  }

});

/*mainRouter.get('/geocode',(r:Request, w:Response)=>{
  const geopositions = r.query.geopositions;
  const key= r.query.key;
  requestApp(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${geopositions}&location_type=ROOFTOP&result_type=street_address&key=${key}`,
    function(error:any, response:any, body:any
    ){
      console.error('error:', error);
      console.log('statuscode:', response && response.statusCode);
      console.log('body:', body);
      if(!error){
        responseApi.response(w,200,JSON.parse(body));
      }
    }

  );

});*/

mainRouter.get('geocode',(r:Request,w:Response)=>{
  const latitud = r.query.latitud;
  const longitud = r.query.longitud;
  const key = r.query.key;
  requestApp(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitud},${longitud}&key=${key}`,
    function(error:any, response:any, body:any){
      console.error('error:',error);
      console.log('statusCode:', response && response.statusCode);
      console.log('body:', body);
      if(!error){
        responseApi.response(w,200,JSON.parse(body));
      }
      
      
    }

  );
});

export default mainRouter;