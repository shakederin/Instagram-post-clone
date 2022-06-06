import type { Locator, Page } from "@playwright/test";
import {
  COMMENT_LIST,
  COMMENTS,
  FORM,
  COMMENT_INPUT,
  POST_COMMENT_BUTTON,
} from "./selectors.js";

export class InstagramCloneDriver {
  private page: Page;
  private commentInputLocator: Locator;
  private postCommentButtonLocator: Locator;
  private commentsLocator: Locator;
  private commentListLocator: Locator;
  private formLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.commentInputLocator = page.locator(COMMENT_INPUT);
    this.postCommentButtonLocator = page.locator(POST_COMMENT_BUTTON);
    this.commentListLocator = page.locator(COMMENT_LIST);
    this.formLocator = page.locator(FORM);
    this.commentsLocator = page.locator(COMMENTS);
  }

  async postComment(input: string) {
    await this.typeInput(input);
    await this.page.keyboard.press("Enter");
  }

  async typeInput(input: string) {
    await this.commentInputLocator.type(input);
  }

  async clickPostComment() {
    await this.postCommentButtonLocator.click();
  }

  getComments() {
    return this.commentsLocator;
  }

  async getCommentsCount() {
    return await this.commentsLocator.count();
  }

  async isElementRendered(element: Locator) {
    try {
      await element.waitFor({ state: "attached", timeout: 2000 });
      return true;
    } catch (_error) {
      return false;
    }
  }

  async isInputRendered() {
    return await this.isElementRendered(this.commentInputLocator);
  }

  async isPostCommentBtnRendered() {
    return await this.isElementRendered(this.postCommentButtonLocator);
  }

  async isCommentListRendered() {
    return await this.isElementRendered(this.commentListLocator);
  }

  async isFormRendered() {
    return await this.isElementRendered(this.formLocator);
  }
}
