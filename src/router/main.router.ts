import { Router, Request, Response, request } from 'express';
import { ResponseApi } from '../server/response_api';

const mainRouter = Router();
const responseApi = new ResponseApi();

mainRouter.get('/', (_: Request, w: Response) => {
  responseApi.response(w, 200, {ok: true, response: 'Todo bien'});
});

export default mainRouter;