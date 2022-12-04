import { Authentication } from "./authentication";

export class GetCompositionRooms {
  private Pull_ListCompositionRooms_RQ: any;

  public constructor(username: string, password: string) {
    this.Pull_ListCompositionRooms_RQ = {
      Authentication: new Authentication(username, password),
    };
  }
}
