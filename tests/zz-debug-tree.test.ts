import { test } from '@mobilewright/test';

// Temporary: prints the login screen's accessibility tree so locators can be matched to it.
test('dump login view tree @smoke', async ({ device, screen, bundleId }) => {
  await device.launchApp(bundleId);
  await new Promise((r) => setTimeout(r, 8000));
  const tree = await screen.viewTree();
  console.log('VIEWTREE_START');
  console.log(JSON.stringify(tree));
  console.log('VIEWTREE_END');
});
