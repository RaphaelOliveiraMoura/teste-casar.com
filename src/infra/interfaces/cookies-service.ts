export interface ICookiesService {
  set(name: string, value: string): Promise<void>;

  get(name: string): Promise<string | null>;
}
