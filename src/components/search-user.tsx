import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { InputField, InputIcon, InputRoot } from '@/components/input';

export function SearchUserForm() {
  return (
    <form className="flex items-center md:pl-6 w-full" data-testid="header-search-user">
      <InputRoot error={false} className="w-full  max-w-[668px] flex-shrink">
        <InputField type="text" placeholder="Buscar usuário" />
        <InputIcon>
          {/* TODO: validate heigth on mobile and desktop */}
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </InputIcon>
      </InputRoot>
    </form>
  );
}
