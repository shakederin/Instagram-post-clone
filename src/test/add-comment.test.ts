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
    await testAddComent(page, "Enter");
  });

  test('Add comment with "Post" button"', async ({ page }) => {
    await testAddComent(page, "click");
  });
});

const testAddComent = async (page: any, submitType: string) => {
  const commentsCount = page.locator(".comment");
  const countBefore = await commentsCount.count();
  const inputElement = page.locator("#commentInput");
  await inputElement.type(mockInput);
  if (submitType === "Enter") {
    await page.keyboard.press("Enter");
  } else {
    await page.locator("#postComment").click();
  }
  const countAfter = await commentsCount.count();
  expect(countAfter - countBefore).toBe(1);
  const commentsInnerText = page.locator(".commentText > div > span").last();
  const newCommentText = await commentsInnerText.innerText();
  expect(newCommentText).toBe(mockInput);
  const inputFiled = await inputElement.innerText();
  expect(inputFiled).toBe("");
};
