import { Request, Response, request } from 'express';

export class ResponseApi {

  public response(w: Response, status: number, data: any) {
    if (status == 200 || status == 204) {
      w.status(status).json(data);
    } else {
      w.status(status).json({
        status: false,
        response: data
      });
    }    
  }

}