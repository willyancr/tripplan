import Header from '@/app/components/header/page';

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-12">
      <Header />
      {children}
    </section>
  );
}