import { Heart } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

import { Button } from "@/ui/components/button";
import { SearchInputText } from "@/ui/components/search-input-text";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex h-full flex-col items-center">
      <header className="relative flex w-full justify-between border-b">
        <div className="container flex grid-cols-2 items-center md:grid">
          <Suspense>
            <SearchInputText
              className="my-4 flex-1"
              placeholder="Buscar usuário"
            />
          </Suspense>
        </div>

        <div className="bottom-0 right-0 top-0 md:absolute">
          <Link href="/favoritos">
            <Button className="h-full">
              <Heart />
              <span className="hidden md:block">Favoritos</span>
            </Button>
          </Link>
        </div>
      </header>

      <div className="container flex-1 py-8">{children}</div>
    </main>
  );
}
