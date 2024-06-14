import { Heart } from "lucide-react";

import { Button } from "@/ui/components/button";
import { SearchInputText } from "@/ui/components/search-input-text";
import { NotFoundRepositoriesSection } from "@/ui/sections/not-found-repositories-section";
import { SearchRepositoriesSection } from "@/ui/sections/search-repositories-section";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center">
      <header className="flex w-full justify-between border-b border-border-line">
        <SearchInputText
          className="my-4 ml-8 w-full"
          placeholder="Buscar usuário"
        />
        <Button>
          <Heart />
          Favoritos
        </Button>
      </header>

      <div className="container flex-1 py-8">
        <div className="hidden">
          <NotFoundRepositoriesSection searchText="abc" />
        </div>
        <SearchRepositoriesSection />
      </div>
    </main>
  );
}
