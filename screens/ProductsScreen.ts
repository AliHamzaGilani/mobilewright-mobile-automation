import { BaseScreen } from './BaseScreen';

export class ProductsScreen extends BaseScreen {
  get title() {
    return this.screen.getByText('PRODUCTS');
  }

  product(name: string) {
    return this.screen.getByText(name);
  }
}
