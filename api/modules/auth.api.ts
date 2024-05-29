import HttpFactory from "~/api/HttpFactory";
import type { ILoginRequestBody } from "~/type/UI";

export default class AuthApi extends HttpFactory {
  public async login(body: ILoginRequestBody): Promise<any> {
    return this.request("POST", "/auth/login", body);
  }
}
