import { test as base } from '@mobilewright/test';
import { LoginScreen } from '../screens/LoginScreen';
import { ProductsScreen } from '../screens/ProductsScreen';

type Screens = {
  loginScreen: LoginScreen;
  productsScreen: ProductsScreen;
};

/** Extends the Mobilewright fixtures with ready-made screen objects. */
export const test = base.extend<Screens>({
  loginScreen: async ({ screen }, use) => {
    await use(new LoginScreen(screen));
  },
  productsScreen: async ({ screen }, use) => {
    await use(new ProductsScreen(screen));
  },
});

export { expect } from '@mobilewright/test';
