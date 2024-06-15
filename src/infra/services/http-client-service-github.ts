import { IConfigService } from "@/infra/interfaces/config-service";
import { IHttpClientService } from "@/infra/interfaces/http-client-service";

export class HttpClientServiceGithub implements IHttpClientService {
  constructor(
    private readonly httpClient: IHttpClientService,
    private readonly config: IConfigService,
  ) {}

  private BASE_URL = "https://api.github.com";

  private getDefaultHeaders() {
    return {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      Authorization: `Bearer ${this.config.get("GITHUB_TOKEN")}`,
    };
  }

  async get<T>(
    url: string,
    params?: { headers?: Record<string, string> | undefined } | undefined,
  ): Promise<{ data: T; status: number }> {
    return this.httpClient.get(this.BASE_URL + url, {
      ...params,
      headers: { ...this.getDefaultHeaders(), ...params?.headers },
    });
  }
}
