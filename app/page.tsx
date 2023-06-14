import { Profile } from '@/components/Icons';

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="mb-8 text-5xl">home page</h1>

      <Profile />
      <Profile color="red" size="lg" />
      <Profile color="blue" width={50} height={50} />
    </main>
  );
}
