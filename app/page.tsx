import PageLayout from '@/components/PageLayout';
import Header from '@/components/Header';

export default async function Home() {
  return (
    <>
      <PageLayout.TopFixed>
        <Header />
      </PageLayout.TopFixed>
      <PageLayout.Contents>
        {/* TODO: PR 머지할 때, QA용 코드 제거하기 */}
        <ul>
          <li className="bg-red-200 text-2xl">list</li>
          <li className="text-2xl">list</li>
          <li className="bg-red-200 text-2xl">list</li>
          <li className="text-2xl">list</li>
          <li className="bg-red-200 text-2xl">list</li>
          <li className="text-2xl">list</li>
          <li className="bg-red-200 text-2xl">list</li>
          <li className="text-2xl">list</li>
          <li className="bg-red-200 text-2xl">list</li>
          <li className="text-2xl">list</li>
          <li className="bg-red-200 text-2xl">list</li>
          <li className="text-2xl">list</li>
          <li className="bg-red-200 text-2xl">list</li>
          <li className="text-2xl">list</li>
          <li className="bg-red-200 text-2xl">list</li>
          <li className="text-2xl">list</li>
          <li className="bg-red-200 text-2xl">list</li>
          <li className="text-2xl">list</li>
          <li className="bg-red-200 text-2xl">list</li>
        </ul>
      </PageLayout.Contents>
    </>
  );
}
