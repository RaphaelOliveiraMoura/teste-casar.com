import { IConfigService } from "@/infra/interfaces/config-service";

export class ConfigServiceEnv implements IConfigService {
  private env = {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    GITHUB_URL: "https://api.github.com",
    GITHUB_VERSION: "2022-11-28",
  };

  get<T = string>(key: string): T | null {
    const envKey = key as keyof typeof this.env;
    const envValue = this.env[envKey] as T;
    return envValue || null;
  }
}
