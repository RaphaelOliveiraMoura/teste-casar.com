import { CookiesService } from "@/domain/services/cookies-service";

export class CookiesServiceNext implements CookiesService {
  async set(name: string, value: string): Promise<void> {
    console.log(name, value);
  }

  async get(name: string): Promise<string | undefined> {
    console.log(name);
    throw new Error("Method not implemented.");
  }
}
