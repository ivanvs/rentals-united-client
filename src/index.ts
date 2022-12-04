import json2xml from "json2xml";
import { HttpClient } from "./http.client";
import { GetAmenities } from "./requests/get.amenities";
import { GetLocations } from "./requests/get.locations";
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

  private async sendRq(request: any) {
    const result = await this.client.send(json2xml(request));

    const response = await parseXml2Json(result.data);
    return response;
  }
}
