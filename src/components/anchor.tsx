import Link from 'next/link';
import type { ComponentProps } from 'react';

interface AnchorProps extends ComponentProps<'a'> {}

export function Anchor(props: AnchorProps) {
  return <Link href={props.href || '#'} data-testid="anchor-component" {...props} />;
}
