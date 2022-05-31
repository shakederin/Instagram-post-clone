// import { Locator, Page } from "@playwright/test";

export class InstagramCloneDriver {
  private page: any;
  private inputLocator: any;
  private postCommentLocator: any;
  private commentsLocator: any;
  private commentListLocator: any;
  private formLocator: any;

  constructor(page: any) {
    this.page = page;
    this.inputLocator = page.locator("#commentInput");
    this.postCommentLocator = page.locator("#postComment");
    this.commentListLocator = page.locator("#commentsList");
    this.formLocator = page.locator("#inputForm");
    this.commentsLocator = page.locator(".comment");
  }

  postComment = async (input: string) => {
    await this.typeInput(input);
    await this.page.keyboard.press("Enter");
  };

  typeInput = async (input: string) => {
    await this.inputLocator.type(input);
  };

  clickPostComment = async () => {
    await this.postCommentLocator.click();
  };

  getComments = () => {
    return this.commentsLocator;
  };

  getCommentsCount = async () => {
    return await this.commentsLocator.count();
  };

  isInputRendered = async () => {
    return await this.inputLocator.isVisible();
  };

  isPostCommentBtnRendered = async () => {
    return await this.postCommentLocator.isVisible();
  };

  isCommentListRendered = async () => {
    return await this.commentListLocator.isVisible();
  };

  isFormRendered = async () => {
    return await this.formLocator.isVisible();
  };
}
