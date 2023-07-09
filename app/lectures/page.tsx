import Link from 'next/link';

import PageLayout from '@/components/PageLayout';
import Header from '@/components/Header';
import Input from '@/components/Input';

import { getLectures } from '@/server/controllers/lectures';

export default async function Page({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  const { search } = searchParams;
  const { items, total } = await getLectures({ search });

  return (
    <>
      <PageLayout.TopFixed>
        <Header />
        <Input readOnly defaultValue={search} />
      </PageLayout.TopFixed>
      <PageLayout.Contents>
        <h1 className="text-3xl">Lectures Page</h1>

        <ul>
          <h3 className="text-xl">검색 결과에 따른 강의 목록</h3>

          {items.map(({ uuid, lecture, creator, category, platforms, hashtags, languages, summary, link }) => (
            <li key={uuid} className="border-2 border-solid border-blue-500">
              <Link href={link} target="_blank">
                <p>카테고리: {category}</p>
                <p>강의 제목: {lecture}</p>
                <p>크리에이터: {creator}</p>
                <p>플랫폼: {platforms.join(', ')}</p>
                <p>해시태그: {hashtags.join(', ')}</p>
                <p>언어: {languages.join(', ')}</p>
                <p>한줄 설명: {summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </PageLayout.Contents>
    </>
  );
}
