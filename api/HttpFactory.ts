import { type $Fetch } from "ofetch";

export default class HttpFactory {
  private fetcher: $Fetch;

  constructor(fetcher: $Fetch) {
    this.fetcher = fetcher;
  }

  public async request<T>(
    method: string,
    url: string,
    body?: object,
    extern = {}
  ): Promise<T> {
    return await this.fetcher(url, { method, body, ...extern });
  }
}
