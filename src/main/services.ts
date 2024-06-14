import { CookiesServiceNext } from "@/infra/services/cookies-service-next";
import { HttpClientServiceFetch } from "@/infra/services/http-client-service-fetch";

export const cookiesService = new CookiesServiceNext();
export const httpClientService = new HttpClientServiceFetch();
