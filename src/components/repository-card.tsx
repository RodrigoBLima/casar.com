import { getLanguageColor } from '@/services/get-language-color';
import ButtonRoundedHearth from './button-rounded-hearth';
import { Repository } from '@/app/interfaces/repository';
import { formatUpdatedDate } from '@/utils/to-locale-date-string';
import { checkRepoIsStarred } from '@/storage/cookie/check-repo-is-starred';

interface RepositoryCardProps extends Repository {
  isFavorite?: boolean;
}

export async function RepositoryCard({ id, name, language, updated_at, owner, isFavorite = false }: RepositoryCardProps) {
  const isFavoritedByCookie = await checkRepoIsStarred(id);
  const color = await getLanguageColor(language);
  const favoriteButtonCss = 'text-blue-primary border border-blue-primary hover:bg-blue-primary hover:text-white bg-white';

  return (
    <section className="flex flex-col gap-2 border-1 border-gray-soft rounded-sm p-4" data-testid="repository-card">
      <div className="flex items-center gap-1 justify-between">
        <h2 className="text-lg font-semibold text-gray-neutral">{name}</h2>
        <ButtonRoundedHearth
          id={id}
          owner={owner.login}
          repo={name}
          isFavoritedByCookie={isFavoritedByCookie}
          isFavorite={isFavorite || isFavoritedByCookie}
          className={isFavorite || isFavoritedByCookie ? favoriteButtonCss : ''}
        />
      </div>
      <p className="font-normal text-sm text-gray-light">
        Essa é uma simples recriação da página inicial do instagram utilizando ReactJS com Styled Components.
      </p>
      <div className="flex gap-1 flex-col md:flex-row md:gap-6">
        <div className="flex flex-row gap-2">
          <span className="w-4 h-4 rounded-full inline-block" style={{ backgroundColor: color }} />
          <p className="font-normal text-xs text-gray-neutral">{language || '-'}</p>
        </div>
        <p className="font-normal text-xs text-gray-neutral">{formatUpdatedDate(updated_at)}</p>
      </div>
    </section>
  );
}
