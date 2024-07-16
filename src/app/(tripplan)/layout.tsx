import Header from '@/app/components/header/page';
import { CreateTripProvider } from '../context/create-trip-context';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CreateTripProvider>
      <section className="mx-auto w-full max-w-[1200px] px-12 bg-image-black">
        <Header />
        {children}
      </section>
    </CreateTripProvider>
  );
}
