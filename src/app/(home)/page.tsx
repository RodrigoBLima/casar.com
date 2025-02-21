import { Header } from '@/components/header';
import { BottomNavigation } from '@/components/bottom-navigation';
import NotFoundContent from './not-found';
import SearchUserContent from './search-user';
import { findUser } from '@/services/find-user';

interface HomeProps {
  searchParams: { [key: string]: string | undefined };
}

export default async function Home({ searchParams }: HomeProps) {
  const { name } = await searchParams;
  const githubUser = await findUser(name);

  return (
    <main data-testid="home-page">
      <Header />
      {!name && <SearchUserContent />}
      {name && !githubUser?.id && <NotFoundContent term={name} />}
      <BottomNavigation />
    </main>
  );
}
