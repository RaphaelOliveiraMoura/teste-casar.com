import { cookies } from "next/headers";

import { ICookiesService } from "@/infra/interfaces/cookies-service";

export class CookiesServiceNext implements ICookiesService {
  async set(name: string, value: string): Promise<void> {
    const expires = new Date();
    expires.setMonth(expires.getMonth() + 1);
    cookies().set(name, value, { expires });
  }

  async get(name: string): Promise<string | null> {
    return cookies().get(name)?.value || null;
  }
}
