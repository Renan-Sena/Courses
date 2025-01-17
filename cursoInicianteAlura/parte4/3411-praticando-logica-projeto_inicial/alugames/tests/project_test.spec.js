// @ts-check
import {test, expect, defineConfig} from '@playwright/test';

export default defineConfig({
    use: {
        baseURL: 'https://wc69h07x-5500.brs.devtunnels.ms/',
    },
});

test('basic test', async ({ page }) => {
    await page.goto('https://wc69h07x-5500.brs.devtunnels.ms/');

    test('Alugar button', async ({ page }) => {
        await expect(page.getByRole('button', {name: 'Alugar' })).toBeVisible();

    })
});

test('foida', async ({ request }) => {
    const newIssue = await request.get('https://wc69h07x-5500.brs.devtunnels.ms/');
    expect(newIssue.ok()).toBeTruthy();
    expect(await newIssue.text).to('alugar')
})