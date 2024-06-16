import { IHttpClientService } from "@/infra/interfaces/http-client-service";

export class HttpClientServiceFetch implements IHttpClientService {
  async get<T>(
    url: string,
    params?: { headers?: Record<string, string> },
  ): Promise<{ data: T; status: number }> {
    const response = await fetch(url, { headers: params?.headers });

    const data = await response.json();

    return { status: response.status, data };
  }
}
