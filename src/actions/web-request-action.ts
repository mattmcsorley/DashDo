import { Action } from './action';
import { Options, WebRequestOptions } from '../models/options';
import * as request from 'request';
import * as url from 'url';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export class WebRequestAction implements Action {
  private options: WebRequestOptions; 

  constructor(options: Options) {
    this.options = <WebRequestOptions> options;
  }

  public dispatch() {
    request(this.options.url, this.options, (error, response, body) => {
      if (error) {
        console.log(error);
      }
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
    })
  } 
}