import { CoreOptions } from 'request';
import { SendMailOptions } from 'nodemailer';

export interface Options {};

export interface WebRequestOptions extends Options, CoreOptions {
  url: string;
}

export interface EmailOptions extends Options, SendMailOptions {
  includeDate: boolean;
}