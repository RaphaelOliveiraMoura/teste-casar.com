type Params = {
  headers?: Record<string, string>;
};

export interface IHttpClientService {
  get: <T>(
    url: string,
    params?: Params,
  ) => Promise<{ data: T; status: number; headers: Record<string, string> }>;
}
