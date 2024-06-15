import { ICookiesService } from "@/infra/interfaces/cookies-service";

export class CookiesServiceNext implements ICookiesService {
  async set(name: string, value: string): Promise<void> {
    console.log(name, value);
  }

  async get(name: string): Promise<string | undefined> {
    console.log(name);
    throw new Error("Method not implemented.");
  }
}
