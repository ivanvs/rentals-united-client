import { Authentication } from "./authentication";

export class GetPropertyPrice {
  private Pull_GetPropertyPrice_RQ: any;

  public constructor(
    username: string,
    password: string,
    propertyId: number,
    dateFrom: string,
    dateTo: string
  ) {
    this.Pull_GetPropertyPrice_RQ = {
      Authentication: new Authentication(username, password),
      PropertyID: propertyId,
      DateFrom: dateFrom,
      DateTo: dateTo,
    };
  }
}
