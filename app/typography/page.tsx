import Headline from '@/components/Typography/Headline';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Typography components test',
};

export default function Page() {
  return (
    <div className=" ml-12 ">
      <Headline type="h1"> H1/Pretendard/Extrabold/48px </Headline>
      <Headline type="h2"> H2/Pretendard/Bold/34px </Headline>
      <Headline type="h3"> H3/Pretendard/Bold/24px </Headline>
      <Headline type="h4"> H4/Pretendard/Bold/20px </Headline>
      <Headline type="h5"> H5/Pretendard/Bold/16px </Headline>
    </div>
  );
}
