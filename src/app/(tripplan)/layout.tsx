import Header from '@/app/components/header/page';
import { ModalProvider } from '../context/modal-context';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      <section className="mx-auto w-full max-w-[1200px] px-12 bg-image-black">
        <Header />
        {children}
      </section>
    </ModalProvider>
  );
}
