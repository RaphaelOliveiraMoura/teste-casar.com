import { Heart } from "lucide-react";
import Link from "next/link";

import { Button } from "@/ui/components/button";
import { SearchInputText } from "@/ui/components/search-input-text";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex h-full flex-col items-center">
      <header className="relative w-full border-b">
        <div className="container grid grid-cols-2">
          <SearchInputText className="my-4" placeholder="Buscar usuário" />
        </div>

        <div className="absolute bottom-0 right-0 top-0">
          <Link href="/favoritos">
            <Button className="h-full">
              <Heart />
              Favoritos
            </Button>
          </Link>
        </div>
      </header>

      <div className="container flex-1 py-8">{children}</div>
    </main>
  );
}
