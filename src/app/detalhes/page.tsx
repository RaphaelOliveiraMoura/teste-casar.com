import { redirect } from "next/navigation";

import { getUserDetails } from "@/main/use-cases/get-user-details";
import { NotFoundUserSection } from "@/ui/sections/not-found-user-section";
import { UserProfileSection } from "@/ui/sections/user-profile-section";

type PageProps = {
  searchParams: { q?: string };
};

export default async function Page({
  searchParams: { q: searchText },
}: PageProps) {
  if (!searchText) redirect("/");

  const userAndProjects = await getUserDetails.execute({
    id: searchText,
  });

  if (!userAndProjects) {
    return <NotFoundUserSection searchText={searchText} />;
  }

  return (
    <div>
      <UserProfileSection user={userAndProjects.user} />
    </div>
  );
}
