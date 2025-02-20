import Image from 'next/image';
import searchUserImage from '../../assets/search-user.svg';
import { SearchUserForm } from '@/components/search-user';

export default function SearchUserContent() {
  return (
    <main
      className="flex flex-col items-center justify-center md:h-screen md:px-0 md:pt-0 px-5 pt-8"
      data-testid="home-search-user-content"
    >
      <section className="flex flex-col gap-6 md:gap-8 items-center">
        <div className="flex flex-col gap-2 md:gap-0 md:text-center">
          <h1 className="text-xl font-semibold text-gray-neutral">Procure pelo Nome ou Nome de Usuário</h1>
          <h2 className="text-base font-normal text-gray-neutral">
            Encontre os repositórios de algum usuário digitando no campo acima
          </h2>
        </div>

        <div className="md:block hidden justify-center">
          <Image src={searchUserImage} alt="Imagem relacionada a pesquisa de algo" height={257} width={230} />
        </div>

        <div className="w-full md:hidden block justify-center">
          <SearchUserForm />
        </div>
      </section>
    </main>
  );
}
