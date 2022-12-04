import { Authentication } from "./authentication";

export class GetLocations {
  private Pull_ListLocations_RQ: any;

  public constructor(username: string, password: string) {
    this.Pull_ListLocations_RQ = {
      Authentication: new Authentication(username, password),
    };
  }
}
