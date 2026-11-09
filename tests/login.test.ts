import { test, expect } from '../fixtures/test';
import { PASSWORD, users } from '../test-data/users';

test.describe('Login', () => {
  // Start every test from a fresh app launch so tests stay independent.
  test.beforeEach(async ({ device, bundleId }) => {
    await device.launchApp(bundleId);
  });

  test('standard user reaches the products screen @smoke', async ({ loginScreen, productsScreen }) => {
    await loginScreen.login(users.standard, PASSWORD);

    await expect(productsScreen.title).toBeVisible();
    await expect(productsScreen.product('Sauce Labs Backpack')).toBeVisible();
  });

  const invalidCases = [
    { name: 'locked out user', user: users.lockedOut, pass: PASSWORD, message: 'Sorry, this user has been locked out.' },
    {
      name: 'wrong password',
      user: users.standard,
      pass: 'wrong_password',
      message: 'Username and password do not match any user in this service.',
    },
    { name: 'empty username', user: '', pass: PASSWORD, message: 'Username is required' },
  ];

  for (const c of invalidCases) {
    test(`shows an error for ${c.name} @regression`, async ({ loginScreen }) => {
      await loginScreen.login(c.user, c.pass);

      await expect(loginScreen.errorText(c.message)).toBeVisible();
    });
  }
});
