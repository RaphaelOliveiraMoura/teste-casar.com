import { redirect } from "next/navigation";

import {
  getUserProject,
  getUserDetails,
  getUserProjectRaw,
} from "@/main/use-cases";
import { ListProjectsSection } from "@/ui/sections/list-projects-section";
import { NotFoundUserSection } from "@/ui/sections/not-found-user-section";
import { UserProfileSection } from "@/ui/sections/user-profile-section";

type PageProps = {
  searchParams: { q?: string };
};

export default async function Page({
  searchParams: { q: searchText },
}: Readonly<PageProps>) {
  if (!searchText) redirect("/");

  const userDetails = await getUserDetails.execute({
    id: searchText,
  });

  if (!userDetails) {
    return <NotFoundUserSection searchText={searchText} />;
  }

  const userProjects = await getUserProject({
    id: userDetails.user.id,
  });

  const loadMoreProjects = async (page?: number) => {
    "use server";
    return getUserProjectRaw({ id: userDetails.user.id, page });
  };

  return (
    <div className="grid gap-8 md:grid-cols-3">
      <div>
        <UserProfileSection user={userDetails.user} />
      </div>
      <div className="md:col-span-2">
        <ListProjectsSection
          projects={userProjects.projects.map((p) => p.toObject())}
          loadMoreProjects={loadMoreProjects}
        />
      </div>
    </div>
  );
}
