import axios from "axios";
import { RU_ENDPOINT, DEFAULT_HEADERS } from "./config";

export class HttpClient {
  async send(bodyRequest: any) {
    return axios.post(RU_ENDPOINT, bodyRequest, { headers: DEFAULT_HEADERS });
  }
}
