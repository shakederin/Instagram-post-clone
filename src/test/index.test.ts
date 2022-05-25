import { test, expect } from "@playwright/test";
import { runServer } from "./global-setup";

test.describe("Instagram post clone", () => {
  // test.beforeAll(() => {
  //   console.log(255);

  //   console.log("set server");
  //   runServer();
  // });

  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:8080/");
  });

  test("Check for the correct URL", async ({ page }) => {
    await expect(page).toHaveURL("http://localhost:8080/");
  });

  test("Check if the UL element is rendered", async ({ page }) => {
    await expect(page.locator("#commentsList")).toBeVisible();
  });

  test("Check if the Form is rendered", async ({ page }) => {
    await expect(page.locator("#inputForm")).toBeVisible();
  });

  test("Check if the input field in form is rendered", async ({ page }) => {
    await expect(page.locator("#commentInput")).toBeVisible();
  });

  test("Check if the buttom in form is rendered", async ({ page }) => {
    await expect(page.locator("#postComment")).toBeVisible();
  });

  test("Add comment with Enter", async ({ page }) => {
    const commentsCountBefore = await page.locator(".comment").count();
    await page.locator("#commentInput").type("World");
    await page.keyboard.press("Enter");
    const commentsCountAfter = await page.locator(".comment").count();
    expect(commentsCountAfter - commentsCountBefore).toBe(1);
    const commentsInnerText = page
      .locator(".commentHeader > div > span")
      .last();
    const newCommentText = await commentsInnerText.innerText();
    expect(newCommentText).toBe("World");
  });

  test('Add comment with "Post" button"', async ({ page }) => {
    const commentsCountBefore = await page.locator(".comment").count();
    await page.locator("#commentInput").type("World");
    await page.locator("#postComment").click();
    const commentsCountAfter = await page.locator(".comment").count();
    expect(commentsCountAfter - commentsCountBefore).toBe(1);
    const commentsInnerText = page
      .locator(".commentHeader > div > span")
      .last();
    const newCommentText = await commentsInnerText.innerText();
    expect(newCommentText).toBe("World");
  });

  test.afterAll(async () => {
    console.log("close server");
    process.exit();
  });
});
