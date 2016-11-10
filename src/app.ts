import { Button } from './models/button';
import { DashButton } from './dash-button';
var config = require('../config/config.json')

export function registerButtons() {
  let buttons: Button[] = config.buttons;
  
  buttons.forEach(button => {
    new DashButton(button);
  });
}

registerButtons();
