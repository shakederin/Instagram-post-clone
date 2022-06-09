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

  typeInput(input: string) {
    return this.commentInputLocator.type(input);
  }

  clickPostComment() {
    return this.postCommentButtonLocator.click();
  }

  getComments() {
    return this.commentsLocator;
  }

  getCommentsCount() {
    return this.commentsLocator.count();
  }

  async isElementRendered(element: Locator) {
    try {
      await element.waitFor({ state: "attached", timeout: 2000 });
      return true;
    } catch (_error) {
      return false;
    }
  }

  isInputRendered() {
    return this.isElementRendered(this.commentInputLocator);
  }

  isPostCommentBtnRendered() {
    return this.isElementRendered(this.postCommentButtonLocator);
  }

  isCommentListRendered() {
    return this.isElementRendered(this.commentListLocator);
  }

  isFormRendered() {
    return this.isElementRendered(this.formLocator);
  }
}
