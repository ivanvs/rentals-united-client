import { Authentication } from "./authentication";

export class GetLocationDetails {
  private Pull_GetLocationDetails_RQ: any;

  public constructor(username: string, password: string, locationId: number) {
    this.Pull_GetLocationDetails_RQ = {
      Authentication: new Authentication(username, password),
      LocationID: locationId,
    };
  }
}
