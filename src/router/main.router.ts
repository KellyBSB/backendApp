import { Router, Request, Response, request } from 'express';
import { ResponseApi } from '../server/response_api';

const mainRouter = Router();
const responseApi = new ResponseApi();

mainRouter.get('/', (_: Request, w: Response) => {
  responseApi.response(w, 200, {ok: true, response: 'Todo bien'});
});

mainRouter.get('/distancematrix', (r: Request, w: Response) => {
  const url : string = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=-0.156655,-78.4803317&destinations=-0.156442,%20-78.480138&key=AIzaSyBernbrysD5h9fJB2Uws1hermcdf1Bm3sw";

});

export default mainRouter;