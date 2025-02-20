import { Header } from '@/components/header';
import { BottomNavigation } from '@/components/bottom-navigation';
import NotFoundContent from './not-found';
import SearchUserContent from './search-user';

export default function Home() {
  return (
    <div data-testid="home-page">
      <Header />
      <SearchUserContent />
      <NotFoundContent />
      <BottomNavigation />
    </div>
  );
}
