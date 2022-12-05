import { Authentication } from "../authentication";

export interface MinStayProps {
  DateFrom: string;
  DateTo: string;
  NightsNumber: number;
}

export interface SetMinStayProps {
  PropertyID: number;
  MinStays: MinStayProps[];
}

export class SetMinStay {
  private Push_PutMinstay_RQ: any;

  public constructor(
    username: string,
    password: string,
    options: SetMinStayProps
  ) {
    this.Push_PutMinstay_RQ = {
      Authentication: new Authentication(username, password),
      ...{
        PropertyMinStay: options.MinStays.map((x) => ({
          MinStay: x.NightsNumber,
          attr: {
            DateFrom: x.DateFrom,
            DateTo: x.DateTo,
          },
        })),
        attr: { PropertyID: options.PropertyID },
      },
    };
  }
}
