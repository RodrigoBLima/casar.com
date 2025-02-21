import { BottomNavigation } from '@/components/bottom-navigation';
import { Header } from '@/components/header';
import NoRepoFound from '@/components/no-repo-found';
import { RepositoryCard } from '@/components/repository-card';
import { getStaredRepos } from '@/services/get-stared-repos';

interface FavoritesProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Favorites({ searchParams }: FavoritesProps) {
  const { name } = await searchParams;

  const repos = await getStaredRepos(name as string, {
    next: {
      tags: ['get-favorites'],
    },
  });

  return (
    <main data-testid="favorites-page">
      <Header />
      <section className="flex flex-col gap-2 md:gap-5 pt-8 px-5 md:pb-5 pb-24 overflow-y-auto md:max-w-4xl md:mx-auto">
        <h1 className="text-[1.313rem] font-semibold text-gray-neutral md:text-blue-primary md:text-center">Meus favoritos</h1>
        {repos.length === 0 ? <NoRepoFound /> : repos.map(repo => <RepositoryCard key={repo.id} {...repo} isFavorite />)}
      </section>
      <BottomNavigation />
    </main>
  );
}
