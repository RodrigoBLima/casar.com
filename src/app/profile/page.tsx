import { use } from 'react';
import Image from 'next/image';
import { BottomNavigation } from '@/components/bottom-navigation';
import { Header } from '@/components/header';
import { RepositoryCard } from '@/components/repository-card';
import { SearchUserForm } from '@/components/search-user';
import { getUser } from '@/services/get-user';
import { getUserRepos } from '@/services/get-user-repos';
import NoRepoFound from '@/components/no-repo-found';

type SearchParams = Promise<{ [key: string]: string | undefined }>;

export default async function ProfilePage(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const name = searchParams?.name;

  const user = await getUser(name as string);
  const repos = await getUserRepos(name as string, {
    next: {
      tags: ['get-user-repos'],
    },
  });

  return (
    <main data-testid="profile-page">
      <Header />

      <section className="flex  flex-1 flex-col gap-4 pt-8 pl-5 pr-5 pb-24 md:pb-8 md:px-6 md:flex-row md:gap-12">
        <div className="w-full md:hidden block justify-center">
          <SearchUserForm />
        </div>

        <div className="h-fit flex flex-col md:items-center gap-2 md:gap-6 border p-5 border-gray-soft rounded-lg md:px-5 md:py-10 md:min-w-md">
          <div className="flex md:flex-col md:items-center gap-2 md:gap-6">
            <Image
              className="rounded-full hidden md:block object-contain"
              src={user.avatar_url}
              loading="lazy"
              alt="Foto perfil github desktop"
              height={200}
              width={200}
            />
            <Image
              className="rounded-full block md:hidden object-contain"
              src={user.avatar_url}
              loading="lazy"
              alt="Foto perfil github mobile"
              height={48}
              width={48}
            />

            <div className="flex flex-col">
              <h1 className="font-semibold text-lg md:text-[1.313rem] text-gray-neutral">{user.name}</h1>
              <span className="font-normal text-sm text-gray-dark md:text-center">{user.company || '-'}</span>
            </div>
          </div>

          <hr className="w-full border-t border-[1px] border-gray-soft block md:hidden" />

          <p className="font-normal text-xs md:text-sm text-gray-dark md:text-center">{user.bio}</p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-[1.313rem] font-semibold text-blue-primary md:">Repositórios</h2>
          <div className="md:pb-6 flex flex-col gap-4 w-full" data-testid="profile-page-content-repositories">
            {repos.length === 0 ? <NoRepoFound /> : repos.map(repo => <RepositoryCard key={repo.id} {...repo} />)}
          </div>
        </div>
      </section>
      <BottomNavigation />
    </main>
  );
}
