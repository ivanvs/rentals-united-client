import { Authentication } from "./authentication";

export class GetAmenities {
  private Pull_ListAmenities_RQ: any;

  public constructor(username: string, password: string) {
    this.Pull_ListAmenities_RQ = {
      Authentication: new Authentication(username, password),
    };
  }
}
