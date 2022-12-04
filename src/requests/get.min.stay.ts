import { Authentication } from "./authentication";

export class GetMinStay {
  private Pull_ListPropertyMinStay_RQ: any;

  public constructor(
    username: string,
    password: string,
    propertyId: number,
    dateFrom: string,
    dateTo: string
  ) {
    this.Pull_ListPropertyMinStay_RQ = {
      Authentication: new Authentication(username, password),
      PropertyID: propertyId,
      DateFrom: dateFrom,
      DateTo: dateTo,
    };
  }
}
