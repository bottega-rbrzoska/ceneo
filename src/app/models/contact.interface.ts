import { CeneoAddress } from './ceneo-address.interface';

export interface Contact {
  firstName: string;
  lastName: string;
  nickName?: string;
  address: CeneoAddress;
}
