import { Authentication } from "../authentication";

export class ArchiveUser {
  private Push_ArchiveUser_RQ: any;

  public constructor(username: string, password: string) {
    this.Push_ArchiveUser_RQ = {
      Authentication: new Authentication(username, password),
    };
  }
}
