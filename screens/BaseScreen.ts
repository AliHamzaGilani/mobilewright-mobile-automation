import type { Screen } from 'mobilewright';

/** Base class for screen objects. Screen objects expose locators and actions; tests own the assertions. */
export abstract class BaseScreen {
  constructor(protected readonly screen: Screen) {}

  /** Closes the Android soft keyboard so it does not cover the next control. */
  protected async hideKeyboard() {
    await this.screen.pressButton('BACK');
  }
}
