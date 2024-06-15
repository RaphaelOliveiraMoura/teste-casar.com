export interface IConfigService {
  get: <T = string>(key: string) => T | null;
}
