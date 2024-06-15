import { CookiesServiceNext } from "@/infra/services/cookies-service-next";
import { HttpClientServiceFetch } from "@/infra/services/http-client-service-fetch";
import { HttpClientServiceGithub } from "@/infra/services/http-client-service-github";

export const cookiesService = new CookiesServiceNext();
export const httpClientGithubService = new HttpClientServiceGithub(
  new HttpClientServiceFetch(),
);
