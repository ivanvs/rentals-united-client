import json2xml from "json2xml";
import { HttpClient } from "./http.client";
import { GetAdditionalFeeTypes } from "./requests/get.additiona.fee.types";
import { GetAdditionalFeeDiscriminatorTypes } from "./requests/get.additional.fee.discriminator.types";
import { GetAmenities } from "./requests/get.amenities";
import { GetAvailabilityCalendar } from "./requests/get.availability.calendar";
import { GetCompositionRooms } from "./requests/get.composition.rooms";
import { GetLocations } from "./requests/get.locations";
import { GetMinStay } from "./requests/get.min.stay";
import { GetProperty } from "./requests/get.property";
import { GetPropertyPrice } from "./requests/get.property.price";
import { GetRoomAmenities } from "./requests/get.room.amenities";
import { ListLanguages } from "./requests/pull.list.languages";
import { parseXml2Json } from "./util/parse.xml";

export class RUClient {
  private client: HttpClient;

  constructor(private username: string, private password: string) {
    this.client = new HttpClient();
  }

  async listLanguages() {
    return this.sendRq(new ListLanguages(this.username, this.password));
  }

  async getAmenities() {
    return this.sendRq(new GetAmenities(this.username, this.password));
  }

  async getLocations() {
    return this.sendRq(new GetLocations(this.username, this.password));
  }

  async getAdditionalFeeTypes() {
    return this.sendRq(new GetAdditionalFeeTypes(this.username, this.password));
  }

  async getAdditionalFeeDiscriminatorTypes() {
    return this.sendRq(
      new GetAdditionalFeeDiscriminatorTypes(this.username, this.password)
    );
  }

  async getCompositionRooms() {
    return this.sendRq(new GetCompositionRooms(this.username, this.password));
  }

  async getRoomAmenities() {
    return this.sendRq(new GetRoomAmenities(this.username, this.password));
  }

  async getProperty(propertyId: number) {
    return this.sendRq(
      new GetProperty(this.username, this.password, propertyId)
    );
  }

  async getPropertyPrice(propertyId: number, dateFrom: string, dateTo: string) {
    return this.sendRq(
      new GetPropertyPrice(
        this.username,
        this.password,
        propertyId,
        dateFrom,
        dateTo
      )
    );
  }

  async getMinStay(propertyId: number, dateFrom: string, dateTo: string) {
    return this.sendRq(
      new GetMinStay(this.username, this.password, propertyId, dateFrom, dateTo)
    );
  }

  async getAvailabilityCalendar(
    propertyId: number,
    dateFrom: string,
    dateTo: string
  ) {
    return this.sendRq(
      new GetAvailabilityCalendar(
        this.username,
        this.password,
        propertyId,
        dateFrom,
        dateTo
      )
    );
  }

  private async sendRq(request: any) {
    const result = await this.client.send(json2xml(request));

    const response = await parseXml2Json(result.data);
    return response;
  }
}
