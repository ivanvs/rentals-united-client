import { Authentication } from "./authentication";

export class GetProperty {
  private Pull_ListSpecProp_RQ: any;

  public constructor(username: string, password: string, propertyId: number) {
    this.Pull_ListSpecProp_RQ = {
      Authentication: new Authentication(username, password),
      PropertyID: propertyId,
    };
  }
}
