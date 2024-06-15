import Image from "next/image";

import { User } from "@/domain/entities/user";

type UserProfileSectionProps = {
  user: User;
};

export function UserProfileSection({ user }: UserProfileSectionProps) {
  return (
    <aside className="sticky top-4 flex flex-col items-center gap-2 border p-6 text-center">
      <Image
        src={user.imageUrl}
        alt={`Imagem de perfil do usuário ${user.name}`}
        width={200}
        height={200}
        className="rounded-full bg-grey-neutral"
      />
      <div>
        <h2 className="text-xl font-semibold">{user.name}</h2>
        <span>@{user.id}</span>
      </div>
      <p>{user.description}</p>
    </aside>
  );
}
