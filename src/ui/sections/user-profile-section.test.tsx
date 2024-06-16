import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import { UserProfileSection } from "./user-profile-section";

test("<UserProfileSection />", async () => {
  const snapshot = render(
    <UserProfileSection
      user={{
        id: "1",
        name: "user test",
        description: "user description",
        imageUrl: "https://google.com",
      }}
    />,
  );

  expect(screen.getByText("user test")).toBeDefined();
  expect(screen.getByText("user description")).toBeDefined();

  expect(snapshot).toMatchSnapshot();
});
