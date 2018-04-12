import { Button } from './models/button';
import { Options } from './models/options';
import { Action } from './actions/action';
import { EmailAction } from './actions/email-action';
import { WebRequestAction } from './actions/web-request-action';
var dashButton = require('node-dash-button');

export class DashButton {
  private dash: any;
  private action: Action;

  constructor(private button: Button) {
    this.action = this.getAction(this.button.action);
    this.dash = new dashButton(this.button.address, this.button.interface);
    this.dash.on('detected', () => {
      console.log(`Detected ${button.name}:${this.button.address}`);
      this.action.dispatch();
    });
    console.log(`Registered ${button.name}:${this.button.address}`);
  }

  private getAction(actionType: string): Action {
    switch (actionType) {
      case 'email':
        return new EmailAction(this.button.options);
      case 'webRequest':
        return new WebRequestAction(this.button.options);
      default:
        throw(actionType);
    }
  }
}
