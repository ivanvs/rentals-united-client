import { Authentication } from "../authentication";

export class GetUsers {
  private Pull_ListMyUsers_RQ: any;

  public constructor(username: string, password: string) {
    this.Pull_ListMyUsers_RQ = {
      Authentication: new Authentication(username, password),
    };
  }
}
