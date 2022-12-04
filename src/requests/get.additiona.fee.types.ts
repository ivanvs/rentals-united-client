import { Authentication } from "./authentication";

export class GetAdditionalFeeTypes {
  private Pull_ListAdditionalFeeTypes_RQ: any;

  public constructor(username: string, password: string) {
    this.Pull_ListAdditionalFeeTypes_RQ = {
      Authentication: new Authentication(username, password),
    };
  }
}
