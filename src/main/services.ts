import { ConfigServiceEnv } from "@/infra/services/config-service-env";
import { CookiesServiceNext } from "@/infra/services/cookies-service-next";
import { HttpClientServiceFetch } from "@/infra/services/http-client-service-fetch";
import { HttpClientServiceGithub } from "@/infra/services/http-client-service-github";

const configService = new ConfigServiceEnv();

export const cookiesService = new CookiesServiceNext();
export const httpClientGithubService = new HttpClientServiceGithub(
  new HttpClientServiceFetch(),
  configService,
);
