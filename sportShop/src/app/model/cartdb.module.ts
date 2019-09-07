import {Product} from './product.model';

export class CartdbModule {
  constructor(
  public numberid?: string,
  public product?: Product[],
  public quantity?: number,
  public totalPrice?: number) {}

}
