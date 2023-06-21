import { Heart, ArrowLeft, Search, Profile } from '@/components/Icons';

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="mb-8 text-5xl">home page</h1>

      {/* TODO: 스토리북으로 대체 */}
      <Heart color="primary-300" />
      <ArrowLeft size="lg" />
      <Search color="black" width={50} height={50} />
      <Profile size="sm" />
    </main>
  );
}
