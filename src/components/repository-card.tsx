import { getLanguageColor } from '@/services/get-language-color';
import ButtonRoundedHearth from './button-rounded-hearth';

export async function RepositoryCard() {
  const color = await getLanguageColor('TypeScript');
  const favoriteButtonCss = 'text-blue-primary border border-blue-primary hover:bg-blue-primary hover:text-white bg-white';

  return (
    <section className="flex flex-col gap-2 border-1 border-gray-soft rounded-sm p-4" data-testid="repository-card">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-neutral">Pokepicker</h2>
        <ButtonRoundedHearth className={favoriteButtonCss} />
      </div>
      <p className="font-normal text-sm text-gray-light">
        Essa é uma simples recriação da página inicial do instagram utilizando ReactJS com Styled Components.
      </p>
      <div className="flex gap-1 flex-col md:flex-row md:gap-6">
        <div className="flex flex-row gap-2">
          <span className="w-4 h-4 rounded-full inline-block" style={{ backgroundColor: color }} />
          <p className="font-normal text-xs text-gray-neutral">Typescript</p>
        </div>
        <p className="font-normal text-xs text-gray-neutral">Updated on 17 Apr 2021</p>
      </div>
    </section>
  );
}
