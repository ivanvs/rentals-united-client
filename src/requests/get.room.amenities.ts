import { Authentication } from "./authentication";

export class GetRoomAmenities {
  private Pull_ListAmenitiesAvailableForRooms_RQ: any;

  public constructor(username: string, password: string) {
    this.Pull_ListAmenitiesAvailableForRooms_RQ = {
      Authentication: new Authentication(username, password),
    };
  }
}
