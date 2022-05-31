import { test, expect } from "@playwright/test";
import { InstagramCloneDriver } from "../test-kit/instagram-clone-driver.js";
import { closeServer, runServer } from "../utils/server.js";
let port: number;

test.describe("Check for elements rendering", () => {
  test.beforeAll(async () => {
    port = await runServer();
  });

  test.afterAll(() => {
    closeServer();
  });

  test.beforeEach(async ({ page }) => {
    await page.goto(`http://localhost:${port}/`);
  });
  test("Check if UL element render", async ({ page }) => {
    const instagramDriver = new InstagramCloneDriver(page);
    expect(await instagramDriver.isCommentListRendered()).toBe(true);
  });
  test("Check if Form element render", async ({ page }) => {
    const instagramDriver = new InstagramCloneDriver(page);
    expect(await instagramDriver.isFormRendered()).toBe(true);
  });
  test("Check if input element render", async ({ page }) => {
    const instagramDriver = new InstagramCloneDriver(page);
    expect(await instagramDriver.isInputRendered()).toBe(true);
  });
  test("Check if post comment Button element render", async ({ page }) => {
    const instagramDriver = new InstagramCloneDriver(page);
    expect(await instagramDriver.isPostCommentBtnRendered()).toBe(true);
  });
});

test.describe("Add comment to the post", async () => {
  const mockInput = "World";
  test.beforeAll(async () => {
    port = await runServer();
  });

  test.afterAll(async () => {
    await closeServer();
  });

  test.beforeEach(async ({ page }) => {
    await page.goto(`http://localhost:${port}/`);
  });

  test("Add comment with Enter", async ({ page }) => {
    const instagramDriver = new InstagramCloneDriver(page);
    const commentCountBeforePosting = await instagramDriver.getCommentsCount();
    await instagramDriver.postComment(mockInput);
    const commentCountAfterPosting = await instagramDriver.getCommentsCount();
    expect(commentCountAfterPosting - commentCountBeforePosting).toBe(1);
  });

  test('Add comment with "Post-button"', async ({ page }) => {
    const instagramDriver = new InstagramCloneDriver(page);
    const commentCountBeforePosting = await instagramDriver.getCommentsCount();
    await instagramDriver.typeInput(mockInput);
    await instagramDriver.clickPostComment();
    const commentCountAfterPosting = await instagramDriver.getCommentsCount();
    expect(commentCountAfterPosting - commentCountBeforePosting).toBe(1);
  });

  test('Countlnd add comment with "Post-button" when input field is empty', async ({
    page,
  }) => {
    const instagramDriver = new InstagramCloneDriver(page);
    const commentCountBeforePosting = await instagramDriver.getCommentsCount();
    await instagramDriver.clickPostComment();
    const commentCountAfterPosting = await instagramDriver.getCommentsCount();
    expect(commentCountAfterPosting - commentCountBeforePosting).toBe(0);
  });

  test('Countlnd add comment with "Enter" when input field is empty', async ({
    page,
  }) => {
    const instagramDriver = new InstagramCloneDriver(page);
    const commentCountBeforePosting = await instagramDriver.getCommentsCount();
    await instagramDriver.postComment("");
    const commentCountAfterPosting = await instagramDriver.getCommentsCount();
    expect(commentCountAfterPosting - commentCountBeforePosting).toBe(0);
  });
});
