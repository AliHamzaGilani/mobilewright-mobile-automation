import { BaseScreen } from './BaseScreen';

export class LoginScreen extends BaseScreen {
  // The sample app labels its controls with "test-*" accessibility ids.
  get username() {
    return this.screen.getByRole('textfield', { name: 'test-Username' });
  }

  get password() {
    return this.screen.getByRole('textfield', { name: 'test-Password' });
  }

  get loginButton() {
    return this.screen.getByRole('button', { name: 'test-LOGIN' });
  }

  errorText(message: string) {
    return this.screen.getByText(message);
  }

  async login(username: string, password: string) {
    if (username) {
      await this.username.fill(username);
    }
    await this.password.fill(password);
    await this.hideKeyboard();
    await this.loginButton.tap();
  }
}
