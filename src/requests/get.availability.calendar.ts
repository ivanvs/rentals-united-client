import { Authentication } from "./authentication";

export class GetAvailabilityCalendar {
  private Pull_ListPropertyAvailabilityCalendar_RQ: any;

  public constructor(
    username: string,
    password: string,
    propertyId: number,
    dateFrom: string,
    dateTo: string
  ) {
    this.Pull_ListPropertyAvailabilityCalendar_RQ = {
      Authentication: new Authentication(username, password),
      PropertyID: propertyId,
      DateFrom: dateFrom,
      DateTo: dateTo,
    };
  }
}
