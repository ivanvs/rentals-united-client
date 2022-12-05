import json2xml from "json2xml";
import { Authentication } from "../authentication";

export interface ExtraGuestPriceProps {
  ExtraGuests: number;
  Price: number;
}

export interface NigthlyPricePerGuestsProps {
  NrOfGuests: number;
  Price: number;
}

export interface NightlyPriceProps {
  Nights: number;
  Price: number;
  LOSPS?: NigthlyPricePerGuestsProps[];
}

export interface SeasonPricesProps {
  DateFrom: string;
  DateTo: string;
  Price: number;
  Extra?: number;
  EGPS?: ExtraGuestPriceProps[];
  LOSS?: NightlyPriceProps[];
}

export interface SetPropertyPriceProps {
  PropertyID: number;
  Season: SeasonPricesProps[];
}

export class SetPropertyPrice {
  private Push_PutPrices_RQ: any;

  public constructor(
    username: string,
    password: string,
    options: SetPropertyPriceProps
  ) {
    const prices = {
      Prices: options.Season.map((x) => ({
        Season: {
          Price: x.Price,
          Extra: x.Extra,
          LOSS: x.LOSS?.map((y) => ({
            LOS: {
              Price: y.Price,
              LOSPS: y.LOSPS?.map((z) => ({
                LOSP: {
                  Price: z.Price,
                },
                attr: {
                  NrOfGuests: z.NrOfGuests,
                },
              })),
            },
            attr: { Nights: y.Nights },
          })),
        },
        attr: { DateFrom: x.DateFrom, DateTo: x.DateTo },
      })),
      attr: {
        PropertyID: options.PropertyID,
      },
    };

    this.Push_PutPrices_RQ = {
      Authentication: new Authentication(username, password),
      ...prices,
    };
  }
}
