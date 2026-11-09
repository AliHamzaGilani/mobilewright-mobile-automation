// Public demo credentials for the Sauce Labs sample app.
export const PASSWORD = process.env.SAUCE_PASSWORD ?? 'secret_sauce';

export const users = {
  standard: 'standard_user',
  lockedOut: 'locked_out_user',
} as const;
