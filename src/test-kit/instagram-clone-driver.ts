import type { Locator, Page } from "@playwright/test";
import {
  COMMENTLIST,
  COMMENTS,
  FORM,
  INPUT,
  POSTCOMMENT,
} from "./constants.js";

export class InstagramCloneDriver {
  private page: Page;
  private inputLocator: Locator;
  private postCommentLocator: Locator;
  private commentsLocator: Locator;
  private commentListLocator: Locator;
  private formLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputLocator = page.locator(INPUT);
    this.postCommentLocator = page.locator(POSTCOMMENT);
    this.commentListLocator = page.locator(COMMENTLIST);
    this.formLocator = page.locator(FORM);
    this.commentsLocator = page.locator(COMMENTS);
  }

  postComment = async (input: string) => {
    await this.typeInput(input);
    await this.page.keyboard.press("Enter");
  };

  async typeInput(input: string) {
    await this.inputLocator.type(input);
  }

  async clickPostComment() {
    await this.postCommentLocator.click();
  }

  getComments() {
    return this.commentsLocator;
  }

  async getCommentsCount() {
    return await this.commentsLocator.count();
  }

  async isElementRender(element: Locator) {
    try {
      await element.waitFor({ state: "attached", timeout: 2000 });
      return true;
    } catch (_error) {
      return false;
    }
  }

  async isInputRendered() {
    return await this.isElementRender(this.inputLocator);
  }

  async isPostCommentBtnRendered() {
    return await this.isElementRender(this.postCommentLocator);
  }

  async isCommentListRendered() {
    return await this.isElementRender(this.commentListLocator);
  }

  async isFormRendered() {
    return await this.isElementRender(this.formLocator);
  }
}
