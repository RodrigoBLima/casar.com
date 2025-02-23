import Image from 'next/image';
import notFoundImage from '../../assets/not-found.svg';
import { SearchUserForm } from '@/components/search-user';

interface NotFoundProps {
  term: string;
}

export default function NotFound({ term }: NotFoundProps) {
  return (
    <main
      className="flex flex-col items-center justify-center md:h-screen md:px-0 md:pt-0 px-5 pt-8"
      data-testid="home-not-found-content"
    >
      <section className="flex flex-col gap-6 md:gap-8 items-center">
        <div className="w-full md:hidden block justify-center">
          <SearchUserForm />
        </div>

        <div className="flex flex-col gap-2 md:gap-0 text-center">
          <h1 className="text-base md:text-xl font-semibold text-blue-primary">{term}</h1>
          <h2 className="text-base md:text-xl font-semibold text-gray-neutral">Nenhum usuário encontrado</h2>
          <p className="text-sm md:text-base font-normal text-gray-neutral">
            Verifique se a escrita está correta ou tente novamente
          </p>
        </div>

        <div className="md:block hidden justify-center">
          <Image src={notFoundImage} alt="Representando da ausência de resultados na pesquisa" height={257} width={230} />
        </div>
      </section>
    </main>
  );
}
