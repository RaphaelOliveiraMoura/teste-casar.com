import { IHttpClientService } from "@/infra/interfaces/http-client-service";

export class HttpClientServiceFetch implements IHttpClientService {
  async get(url: string, params?: { headers?: Record<string, string> }) {
    const response = await fetch(url, { headers: params?.headers });

    const data = await response.json();

    const headers = Array.from(response.headers.entries()).reduce(
      (acc, [key, value]) => ({ ...acc, [key]: value }),
      {},
    );

    return { status: response.status, data, headers };
  }
}
