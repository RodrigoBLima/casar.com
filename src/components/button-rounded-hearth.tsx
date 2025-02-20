'use client';
import { twMerge } from 'tailwind-merge';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from './button';

interface ButtonRoundedHearthProps {
  className?: string;
}

export default function ButtonRoundedHearth({ className }: ButtonRoundedHearthProps) {
  return (
    <Button
      className={twMerge(
        'rounded-full w-8 h-8 flex items-center justify-center cursor-pointer transition duration-300 text-gray-light bg-white-matte hover:text-gray-dark',
        className
      )}
      data-testid="button-rounded-hearth"
    >
      <FontAwesomeIcon icon={faHeart} width={14} height={13} />
    </Button>
  );
}
