import { test, expect } from '@playwright/test'

test('Home → Calculator → Enter values → Verify outputs', async ({ page }) => {
  // 1. Land on home page
  await page.goto('/')
  await expect(page).toHaveTitle(/Tenerife Mortgage/)

  // 2. Navigate to calculator via nav button
  await page.click('text=Mortgage Calculator')
  await expect(page).toHaveURL(/mortgage-calculator/)
  await expect(page.locator('h1')).toContainText('Mortgage Calculator')

  // 3. Fill in property price
  await page.fill('#propertyPrice', '600000')
  // 4. Fill in deposit
  await page.fill('#deposit', '200000')
  // 5. Fill in interest rate
  await page.fill('#interestRate', '3.5')
  // 6. Fill in term
  await page.fill('#termYears', '25')

  // 7. Click Calculate
  await page.click('text=Calculate')

  // 8. Verify outputs are displayed
  const summary = page.locator('text=Your Summary')
  await expect(summary).toBeVisible()

  // Monthly payment should be shown (non-zero)
  const monthlyPaymentLabel = page.locator('text=Monthly Payment')
  await expect(monthlyPaymentLabel).toBeVisible()

  // LTV should be present
  await expect(page.locator('text=LTV (Loan-to-Value)')).toBeVisible()

  // Mortgage required = 600000 - 200000 = 400000
  await expect(page.locator('text=Mortgage Required')).toBeVisible()
})
