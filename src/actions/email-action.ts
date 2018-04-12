import { Action } from './action';
import { Options, EmailOptions } from '../models/options';
import { Transporter, createTransport, SentMessageInfo, SendMailOptions } from 'nodemailer';

var secrets = require('../config/secrets.json');

export class EmailAction implements Action {
  private emailOptions: EmailOptions;
  private transporter: Transporter;

  constructor(options: Options) {
    this.emailOptions = <EmailOptions> options;
    this.transporter = createTransport({
      host: secrets.host,
      port: secrets.port,
      secure: secrets.secure,
      auth: {
        user: secrets.username,
        pass: secrets.password
      }
    });
  }

  public dispatch() {
    if(this.emailOptions.includeDate) {
      this.emailOptions.text = `${this.emailOptions.message}\n${new Date().toLocaleString()}`;
    } else {
      this.emailOptions.text = this.emailOptions.message
    }
    console.log('Sending ', this.emailOptions);
    this.transporter.sendMail(this.emailOptions, (error: Error, info: SentMessageInfo) =>{
      if( error ) {
        console.log(error);
      }
      if ( info ) {
        console.log(info.accepted);
      }
    });
  }
}
