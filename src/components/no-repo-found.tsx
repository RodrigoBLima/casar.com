import React from 'react';

export default function NoRepoFound() {
  return (
    <section className="flex flex-col gap-2 md:gap-0 md:text-center text-left" data-testid="no-repo-found-component">
      <h2 className="text-base font-normal text-gray-neutral">Nenhum repositório foi encontrado</h2>
    </section>
  );
}
