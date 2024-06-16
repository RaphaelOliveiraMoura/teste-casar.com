"use client";

import { Heart } from "lucide-react";
import { startTransition, useOptimistic } from "react";

import { ProjectDto } from "@/domain/entities/project";
import { favoriteProject } from "@/main/use-cases/favorite-project";
import { unFavoriteProject } from "@/main/use-cases/un-favorite-project";

import { cn } from "../services/classname";

type FavoriteButtonProps = {
  project: ProjectDto;
};

export function FavoriteButton({ project }: FavoriteButtonProps) {
  const [favoriteState, setFavoriteState] = useOptimistic<boolean>(
    Boolean(project.favorite),
  );

  const handleFavorite = () => {
    startTransition(async () => {
      setFavoriteState(!favoriteState);

      if (!favoriteState) {
        await favoriteProject({ project });
      } else {
        await unFavoriteProject({ project });
      }
    });
  };

  return (
    <button
      type="button"
      onClick={() => handleFavorite()}
      className={cn(
        "rounded-full border p-3",
        favoriteState && "border-primary",
        !favoriteState && "bg-white-background-matte",
      )}
    >
      <Heart
        className={cn(
          favoriteState && "fill-primary text-primary",
          !favoriteState && "text-placeholder",
        )}
      />
    </button>
  );
}
