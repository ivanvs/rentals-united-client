import { Authentication } from "./authentication";

export class GetAdditionalFeeDiscriminatorTypes {
  private Pull_ListAdditionalFeeDiscriminators_RQ: any;

  public constructor(username: string, password: string) {
    this.Pull_ListAdditionalFeeDiscriminators_RQ = {
      Authentication: new Authentication(username, password),
    };
  }
}
