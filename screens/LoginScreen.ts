import { BaseScreen } from './BaseScreen';

export class LoginScreen extends BaseScreen {
  // The sample app labels its controls with "test-*" accessibility labels (Android content-desc).
  // LOGIN is a plain ViewGroup with no button role, so labels are the stable hook.
  get username() {
    return this.screen.getByLabel('test-Username');
  }

  get password() {
    return this.screen.getByLabel('test-Password');
  }

  get loginButton() {
    return this.screen.getByLabel('test-LOGIN');
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
