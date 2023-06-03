import { API_URL, CONTENTS_PATH } from '@/constants';

const fetchContents = async () => {
  const res = await fetch(`${API_URL}${CONTENTS_PATH}`, {
    next: { revalidate: 10 },
  });
  const contents: any = await res.json();
  return contents;
};

export default async function Home() {
  const contents = await fetchContents();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="mb-8 text-5xl">home page</h1>

      {contents.map(({ path, name }: any) => (
        <h3 key={path} className="text-2xl">
          {name}
        </h3>
      ))}
    </main>
  );
}
