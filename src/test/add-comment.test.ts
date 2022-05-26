import { test, expect } from "@playwright/test";
import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import { Server } from "http";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = 8080;
const mockInput = "World";
let server: Server;

const runServer = () => {
  app.use(express.static(path.join(__dirname, "../../public")));
  server = app.listen(port);
};

test.describe("Instagram post clone", () => {
  test.beforeAll(() => {
    runServer();
  });

  test.afterAll(async () => {
    server.close();
  });

  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:8080/");
  });

  test("Check for elements rendering", async ({ page }) => {
    await expect(page, "incorrent URL").toHaveURL("http://localhost:8080/");
    await expect(
      page.locator("#commentsList"),
      "UL element didnt rendered"
    ).toBeVisible();
    await expect(
      page.locator("#inputForm"),
      "the Form didnt rendered"
    ).toBeVisible();
    await expect(
      page.locator("#commentInput"),
      "the input field in form didnt rendered"
    ).toBeVisible();
    await expect(
      page.locator("#postComment"),
      "the buttom in form didnt rendered"
    ).toBeVisible();
  });

  test("Add comment with Enter", async ({ page }) => {
    const commentsCountBefore = await page.locator(".comment").count();
    const inputElement = page.locator("#commentInput");
    await inputElement.type(mockInput);
    await page.keyboard.press("Enter");
    const commentsCountAfter = await page.locator(".comment").count();
    expect(commentsCountAfter - commentsCountBefore).toBe(1);
    const commentsInnerText = page
      .locator(".commentHeader > div > span")
      .last();
    const newCommentText = await commentsInnerText.innerText();
    expect(newCommentText).toBe(mockInput);
  });

  test('Add comment with "Post" button"', async ({ page }) => {
    const commentsCountBefore = await page.locator(".comment").count();
    const inputElement = page.locator("#commentInput");
    await inputElement.type(mockInput);
    await page.locator("#postComment").click();
    const commentsCountAfter = await page.locator(".comment").count();
    expect(commentsCountAfter - commentsCountBefore).toBe(1);
    const commentsInnerText = page
      .locator(".commentHeader > div > span")
      .last();
    const newCommentText = await commentsInnerText.innerText();
    expect(newCommentText).toBe(mockInput);
    const inputFiled = await inputElement.innerText();
    expect(inputFiled).toBe("");
  });
});
