import {CartdbModule} from './cartdb.module';


export class AddressModule {
  constructor(
    public id?: string,
    public name?: string,
    public address?: string,
    public city?: string,
    public state?: string,
    public zip?: string,
    public country?: string,
    public shipped?: boolean,
    public canceled?: boolean,
    public cart?: CartdbModule[],
    ) {}

}
