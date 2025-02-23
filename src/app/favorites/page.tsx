"use client";

import { Suspense } from 'react';
import { BottomNavigation } from '@/components/bottom-navigation';
import { Header } from '@/components/header';
import RepositoriesList from '@/components/repositories-list';


export default function Favorites() {
  return (
    <main data-testid="favorites-page">
      <Suspense>
        <Header />
        <section className="flex flex-col gap-2 md:gap-5 pt-8 px-5 md:pb-5 pb-24 overflow-y-auto md:max-w-4xl md:mx-auto">
          <h1 className="text-[1.313rem] font-semibold text-gray-neutral md:text-blue-primary md:text-center">Meus favoritos</h1>
          <RepositoriesList />
        </section>
        <BottomNavigation />
      </Suspense>
    </main>
  );
}
