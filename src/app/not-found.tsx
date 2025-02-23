import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import notFoundImage from '../assets/not-found.svg';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Anchor } from '@/components/anchor';

export default function NotFound() {
  return (
    <main
      className="flex flex-col items-center justify-center h-screen md:px-0 md:pt-0 "
      data-testid="not-found-page"
    >
      <section className="flex flex-col gap-6 md:gap-8 items-center">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="text-base md:text-xl font-semibold text-gray-neutral">Página não encontrada</h2>
          <Anchor className="flex items-center gap-2 p-4 text-white bg-blue-primary rounded-lg" href="/" data-testid="not-found-page-back-to-home">
            <FontAwesomeIcon icon={faArrowLeft} width={24} height={20} />
            <span className="text-sm font-medium">Voltar para home</span>
          </Anchor>
        </div>

        <div className="md:block hidden justify-center">
          <Image src={notFoundImage} alt="Representando da ausência de conteúdo na página" height={257} width={230} />
        </div>
      </section>
    </main>
  )
}
