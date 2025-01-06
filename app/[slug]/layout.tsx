import Header from '../components/Header';

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const { slug } = params;
  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-6">
        <Header />
        <h1 className="text-4xl font-display">{slug}</h1>
      </div>
      <main className="pt-24">{children}</main>
    </div>
  );
}
