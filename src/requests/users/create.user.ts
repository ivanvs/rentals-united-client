import { Authentication } from "../authentication";

export interface CreateUserProps {
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
  PMSId?: number;
  ConfigurationString?: string;
  Locations: {
    LocationId: number;
  };
}

export class CreateUser {
  private Push_CreateUser_RQ: any;

  public constructor(
    username: string,
    password: string,
    props: CreateUserProps
  ) {
    this.Push_CreateUser_RQ = {
      Authentication: new Authentication(username, password),
      ...props,
    };
  }
}
