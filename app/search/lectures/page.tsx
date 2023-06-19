import { getCategories, getLecture } from '@/api/github';

async function Page() {
  const categories = await getCategories();

  for (const { path } of categories) {
    const res = await getLecture(path);
    console.log(res);
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="mb-8 text-5xl">lecture page</h1>
    </main>
  );
}

export default Page;
