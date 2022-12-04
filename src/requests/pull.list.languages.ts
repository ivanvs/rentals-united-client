import { Authentication } from "./authentication";

export class ListLanguages {
  private Pull_ListLanguages_RQ: any;

  public constructor(username: string, password: string) {
    this.Pull_ListLanguages_RQ = {
      Authentication: new Authentication(username, password),
    };
  }
}
