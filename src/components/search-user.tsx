'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { InputField, InputIcon, InputRoot } from '@/components/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter, useSearchParams } from 'next/navigation';
import { z } from 'zod';
import { findUser } from '@/services/find-user';

const githubUsernameSchema = z.object({
  name: z.string().min(2, 'Digite um user válido'),
});

type GithubUsernameSchema = z.infer<typeof githubUsernameSchema>;

export function SearchUserForm() {
  const searchParams = useSearchParams();
  const defaultName = searchParams.get('name') ?? '';
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GithubUsernameSchema>({
    resolver: zodResolver(githubUsernameSchema),
    defaultValues: { name: defaultName },
  });

  async function handleSearchUser({ name }: GithubUsernameSchema) {
    const result = await findUser(name);

    if (result?.id) {
      router.push(`/profile?name=${name}`);
    } else {
      router.push(`?name=${name}`);
    }
  }

  return (
    <form onSubmit={handleSubmit(handleSearchUser)} className="flex items-center md:pl-6 w-full" data-testid="header-search-user">
      <InputRoot error={!!errors?.name} className="w-full  max-w-[668px] flex-shrink">
        <InputField {...register('name')} type="text" placeholder="Buscar usuário" />
        <InputIcon>
          <FontAwesomeIcon className="hidden md:block" icon={faMagnifyingGlass} />
        </InputIcon>
      </InputRoot>
    </form>
  );
}
