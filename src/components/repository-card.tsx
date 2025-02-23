import { getLanguageColor } from '@/utils/get-language-color';
import { Repository } from '@/interfaces/repository';
import { formatUpdatedDate } from '@/utils/to-locale-date-string';
import ButtonRoundedHearth from './button-rounded-hearth';

interface RepositoryCardProps extends Repository { }

export function RepositoryCard(props: RepositoryCardProps) {
  const {
    name,
    language,
    updated_at,
    description,
  } = props

  const color = getLanguageColor(language);

  return (
    <section className="flex flex-col gap-2 border-1 border-gray-soft rounded-sm p-4" data-testid="repository-card">
      <div className="flex items-center gap-1 justify-between">
        <h2 className="text-lg font-semibold text-gray-neutral">{name}</h2>
        <ButtonRoundedHearth {...props} />
      </div>
      <p className="font-normal text-sm text-gray-light">{description}</p>
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
