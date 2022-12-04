import { Authentication } from "../authentication";

export interface UpdateCompanyDetailsLocationProps {
  Id: number;
}

export interface UpdateCompanyDetailsProps {
  ContactInfo: {
    FirstName: string;
    LastName: string;
    Email: string;
    Phone: string;
    City: string;
    CountryId: number;
    Address: string;
    ZipCode: string;
    BirthDate: string;
    LanguageId: number;
  };
  CompanyInfo: {
    CompanyName: string;
    WebsiteAddress: string;
    CompanyCity: string;
    MerchantName: string;
    NumberOfProperties?: number;
    Locations: UpdateCompanyDetailsLocationProps[];
  };
}

export class UpdateCompanyDetails {
  private Push_FillCompanyDetails_RQ: any;

  public constructor(
    username: string,
    password: string,
    props: UpdateCompanyDetailsProps
  ) {
    const options = {
      ContactInfo: { ...props.ContactInfo },
      CompanyInfo: {
        ...props.CompanyInfo,
        Locations: props.CompanyInfo.Locations.map((x) => ({
          Location: "",
          attr: {
            Id: x.Id,
          },
        })),
      },
    };

    this.Push_FillCompanyDetails_RQ = {
      Authentication: new Authentication(username, password),
      ...options,
    };
  }
}
