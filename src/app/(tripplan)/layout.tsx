import Header from '@/app/components/header';
import Providers from '../providers/providers';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <section className="mx-auto w-full max-w-[1200px] px-12 ">
        <Header />
        {children}
      </section>
    </Providers>
  );
}
