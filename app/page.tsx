import { Heart, ArrowLeft, Search, Profile } from '@/components/Icons';

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="mb-8 text-5xl">home page</h1>

      <Heart fillColor="fill-primary-300" />
      <ArrowLeft fillColor="fill-secondary-500" size="lg" />
      <Search fillColor="fill-blue-300" width={50} height={50} />
      <Profile size="sm" />
    </main>
  );
}
