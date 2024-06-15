import { IConfigService } from "@/domain/services/config-service";
import { IHttpClientService } from "@/domain/services/http-client-service";

export class HttpClientServiceGithub implements IHttpClientService {
  constructor(
    private readonly httpClient: IHttpClientService,
    private readonly config: IConfigService,
  ) {}

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
    return this.httpClient.get(url, {
      ...params,
      headers: { ...this.getDefaultHeaders(), ...params?.headers },
    });
  }
}
