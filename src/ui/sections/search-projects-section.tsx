import Image from "next/image";

export function SearchProjectsSection() {
  return (
    <section className="flex h-full flex-col items-center justify-center gap-8">
      <div className="grid place-items-center">
        <h2 className="text-xl font-semibold">
          Procure pelo Nome ou Nome de Usuário
        </h2>
        <p>
          Encontre os repositórios de algum usuário digitando no campo acima
        </p>
      </div>
      <Image
        alt="Imagem de uma pessoa com uma lupa buscando por repositórios na web"
        src="/undraw_people_search.svg"
        width={200}
        height={200}
      />
    </section>
  );
}
