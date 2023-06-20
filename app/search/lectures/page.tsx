import { getLectures } from '@/api/github';

async function Page() {
  const lectures = await getLectures();
  console.log(lectures);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="mb-8 text-3xl">강의자 정보</h1>

      <ul>
        {lectures.map(({ name, path, creator }) => (
          <li key={path}>{creator}: {name}</li>
        ))}
      </ul>
    </main>
  );
}

export default Page;
