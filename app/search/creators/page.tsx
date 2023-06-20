import { getCreators } from '@/api/github';

async function Page() {
  const creators = await getCreators();
  console.log(creators);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="mb-8 text-3xl">Creator 정보</h1>

      <ul>
        {creators.map(({ name, path }) => (
          <li key={path}>{name}</li>
        ))}
      </ul>
    </main>
  );
}

export default Page;
