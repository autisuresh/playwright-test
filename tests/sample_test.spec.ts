import {test, expect} from "@playwright/test";
import { hello, hello_world } from "./demo/hello";

console.log(hello())
console.log(hello_world())

test('my first test', async ({page}) => {
    await page.goto('https://www.google.com')
    await expect(page).toHaveTitle('Google')
});

test('my second test', () => {

});