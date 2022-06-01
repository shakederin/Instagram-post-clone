import { Locator, Page } from "@playwright/test";

export class InstagramCloneDriver {
  private page: Page;
  private inputLocator: Locator;
  private postCommentLocator: Locator;
  private commentsLocator: Locator;
  private commentListLocator: Locator;
  private formLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputLocator = page.locator("#commentInput");
    this.postCommentLocator = page.locator("#postComment");
    this.commentListLocator = page.locator("#commentsList");
    this.formLocator = page.locator("#inputForm");
    this.commentsLocator = page.locator(".comment");
  }

  async postComment(input: string) {
    await this.typeInput(input);
    await this.page.keyboard.press("Enter");
  }

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

  async isInputRendered() {
    return await this.inputLocator.isVisible();
  }

  async isPostCommentBtnRendered() {
    return await this.postCommentLocator.isVisible();
  }

  async isCommentListRendered() {
    return await this.commentListLocator.isVisible();
  }

  async isFormRendered() {
    return await this.formLocator.isVisible();
  }
}
