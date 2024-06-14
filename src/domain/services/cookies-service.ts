export interface CookiesService {
  set(name: string, value: string): Promise<void>;

  get(name: string): Promise<string | undefined>;
}
