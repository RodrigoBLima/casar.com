import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputRootProps extends ComponentProps<'div'> {
  error?: boolean;
}

export function InputRoot({ error = false, className, ...props }: InputRootProps) {
  return (
    <div
      data-error={error}
      className={twMerge(
        'group bg-white h-10 border border-gray-soft rounded-lg px-4 pr-2 flex items-center gap-2 focus-within:border-gray-light data-[error=true]:border-danger',
        className
      )}
      {...props}
    />
  );
}

interface InputIconProps extends ComponentProps<'span'> {}

export function InputIcon({ ...props }: InputIconProps) {
  return (
    <span
      className="text-gray-light group-focus-within:text-gray-light group-[&:not(:has(input:placeholder-shown))]:text-gray-light group-data-[error=true]:text-danger"
      {...props}
    />
  );
}

interface InputFieldProps extends ComponentProps<'input'> {}

export function InputField({ ...props }: InputFieldProps) {
  return <input className="flex-1 outline-0 placeholder-gray-light text-sm font-normal" {...props} />;
}
