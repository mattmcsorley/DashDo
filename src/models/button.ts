import { Options } from './options';

export interface Button {
  name: string;
  address: string;
  interface?: string;
  action: string;
  options: Options;
}
