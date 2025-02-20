import { BottomNavigation } from '@/components/bottom-navigation';
import { Header } from '@/components/header';
import { RepositoryCard } from '@/components/repository-card';
import { getStaredRepos } from '@/services/get-stared-repos';

export default async function Favorites() {
  const repos = await getStaredRepos('RodrigoBLima', {
    next: {
      tags: ['get-favorites'],
    },
  });

  return (
    <main data-testid="favorites-page">
      <Header />
      <section className="flex flex-col gap-2 pt-8 px-5 md:pb-5 pb-24 overflow-y-auto md:max-w-4xl md:mx-auto">
        <h1 className="text-[1.313rem] font-semibold text-gray-neutral md:text-blue-primary md:">Meus favoritos</h1>
        {repos.map(repo => (
          <RepositoryCard key={repo.id} {...repo} isFavorite />
        ))}
      </section>
      <BottomNavigation />
    </main>
  );
}
