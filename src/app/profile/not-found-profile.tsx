import { SearchUserForm } from '@/components/search-user';

export default function NotFoundProfile() {
  return (
    <main
      className="flex flex-col items-center justify-center h-screen md:px-0 md:pt-0"
      data-testid="profile-not-found-content"
    >
      <section className="flex flex-col gap-6 items-center">
        <div className="flex flex-col gap-2 md:gap-0 text-center">
          <h1 className="text-base md:text-xl font-semibold text-blue-primary">Não foi possivel realizar a busca</h1>
          <h2 className="text-base md:text-xl font-semibold text-gray-neutral"> Informe o nome do usuário</h2>
        </div>
        <div className="w-full  block justify-center">
          <SearchUserForm />
        </div>
      </section>
    </main>
  );
}
