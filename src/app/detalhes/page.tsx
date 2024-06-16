import { redirect } from "next/navigation";

import { getUserProject, getUserDetails } from "@/main/use-cases";
import { ListProjectsSection } from "@/ui/sections/list-projects-section";
import { NotFoundUserSection } from "@/ui/sections/not-found-user-section";
import { UserProfileSection } from "@/ui/sections/user-profile-section";

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
        <ListProjectsSection projects={userProjects.projects} />
      </div>
    </div>
  );
}
