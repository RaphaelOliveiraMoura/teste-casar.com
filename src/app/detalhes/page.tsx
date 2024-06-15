import { redirect } from "next/navigation";

import { getUserDetails } from "@/main/use-cases/get-user-details";
import { getUserProject } from "@/main/use-cases/get-user-project";
import { NotFoundUserSection } from "@/ui/sections/not-found-user-section";
import { UserProfileSection } from "@/ui/sections/user-profile-section";
import { UserProjectsSection } from "@/ui/sections/user-projects-section";

type PageProps = {
  searchParams: { q?: string };
};

export default async function Page({
  searchParams: { q: searchText },
}: PageProps) {
  if (!searchText) redirect("/");

  const userDetails = await getUserDetails.execute({
    id: searchText,
  });

  if (!userDetails) {
    return <NotFoundUserSection searchText={searchText} />;
  }

  const userProjects = await getUserProject.execute({
    id: userDetails.user.id,
  });

  return (
    <div className="grid grid-cols-3 gap-8">
      <div>
        <UserProfileSection user={userDetails.user} />
      </div>
      <div className="col-span-2">
        <UserProjectsSection projects={userProjects.projects} />
      </div>
    </div>
  );
}
