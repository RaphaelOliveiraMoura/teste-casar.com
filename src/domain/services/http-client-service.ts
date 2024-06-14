type Params = {
  headers?: Record<string, string>;
};

export interface HttpClientService {
  get: <T>(
    url: string,
    params?: Params,
  ) => Promise<{ data: T; status: number }>;
}
