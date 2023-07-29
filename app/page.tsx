import PageLayout from '@/components/PageLayout';
import Header from '@/components/Header';
import Input from '@/components/Input';
import Test from '@/ui/Test';

export default async function Page() {
  return (
    <>
      <PageLayout.TopFixed>
        <Header />
      </PageLayout.TopFixed>
      <PageLayout.Contents className="flex flex-col">
        <h1 className="my-4 text-3xl">Main Page</h1>

        <div className="flex flex-1 flex-col items-center">
          <Input readOnly />
        </div>
      </PageLayout.Contents>
    </>
  );
}
