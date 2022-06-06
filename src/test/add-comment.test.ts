import { test, expect } from "@playwright/test";
import { Server } from "http";
import { InstagramCloneDriver } from "../test-kit/instagram-clone-driver.js";
import { runServer } from "../utils/server.js";

let port: number;
let closeServer:
  | ((callback?: ((err?: Error | undefined) => void) | undefined) => Server)
  | (() => void);

test.describe("Check for elements rendering", () => {
  test.beforeAll(async () => {
    const { freePort, closeServerFunction } = await runServer();
    port = freePort;
    closeServer = closeServerFunction;
  });

  test.afterAll(() => {
    closeServer();
  });

  test.beforeEach(async ({ page }) => {
    await page.goto(`http://localhost:${port}/`);
  });
  test("Check if UL element rendered", async ({ page }) => {
    const instagramDriver = new InstagramCloneDriver(page);
    expect(
      await instagramDriver.isCommentListRendered(),
      "<ul> element not rendered"
    ).toBe(true);
  });
  test("Check if Form element rendered", async ({ page }) => {
    const instagramDriver = new InstagramCloneDriver(page);
    expect(
      await instagramDriver.isFormRendered(),
      "<Form> element not rendered"
    ).toBe(true);
  });
  test("Check if input element rendered", async ({ page }) => {
    const instagramDriver = new InstagramCloneDriver(page);
    expect(
      await instagramDriver.isInputRendered(),
      "<Input> element not rendered"
    ).toBe(true);
  });
  test("Check if post comment Button element rendered", async ({ page }) => {
    const instagramDriver = new InstagramCloneDriver(page);
    expect(
      await instagramDriver.isPostCommentBtnRendered(),
      "<Button> element not rendered"
    ).toBe(true);
  });
});

test.describe("Add comment to the post", async () => {
  const mockInput = "World";
  test.beforeAll(async () => {
    const { freePort, closeServerFunction } = await runServer();
    port = freePort;
    closeServer = closeServerFunction;
  });

  test.afterAll(() => {
    closeServer();
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

  test('Couldnt add comment with "Enter" when input field is empty', async ({
    page,
  }) => {
    const instagramDriver = new InstagramCloneDriver(page);
    const commentCountBeforePosting = await instagramDriver.getCommentsCount();
    await instagramDriver.postComment("");
    const commentCountAfterPosting = await instagramDriver.getCommentsCount();
    expect(commentCountAfterPosting - commentCountBeforePosting).toBe(0);
  });
});
