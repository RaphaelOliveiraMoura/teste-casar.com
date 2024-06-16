import { IConfigService } from "@/infra/interfaces/config-service";
import { IHttpClientService } from "@/infra/interfaces/http-client-service";

export class HttpClientServiceGithub implements IHttpClientService {
  constructor(
    private readonly httpClient: IHttpClientService,
    private readonly config: IConfigService,
  ) {}

  private getDefaultHeaders() {
    return {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": this.config.get("GITHUB_VERSION") || "",
      Authorization: `Bearer ${this.config.get("GITHUB_TOKEN")}`,
    };
  }

  async get<T>(
    url: string,
    params?: { headers?: Record<string, string> },
  ): Promise<{ data: T; status: number; headers: Record<string, string> }> {
    return this.httpClient.get(this.config.get("GITHUB_URL") + url, {
      ...params,
      headers: { ...this.getDefaultHeaders(), ...params?.headers },
    });
  }
}
