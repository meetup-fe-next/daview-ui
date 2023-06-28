import Body from '@/components/Typography/Body';
import Headline from '@/components/Typography/Headline';
import Subtitle from '@/components/Typography/Subtitle';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Typography components test',
};

export default function Page() {
  return (
    <div className=" ml-12 ">
      <div className=" mb-4">
        <Headline type="h1"> H1/Pretendard/Extrabold/48px </Headline>
        <Headline type="h2"> H2/Pretendard/Bold/34px </Headline>
        <Headline type="h3"> H3/Pretendard/Bold/24px </Headline>
        <Headline type="h4"> H4/Pretendard/Bold/20px </Headline>
        <Headline type="h5"> H5/Pretendard/Bold/16px </Headline>
      </div>
      <div className=" mb-4">
        <Subtitle type="sub1" tag="div">
          Subtitle 1/Pretendard/Medium/20px
        </Subtitle>
        <Subtitle type="sub2" tag="div">
          Subtitle 2/Pretendard/Medium/16px
        </Subtitle>
        <Subtitle type="sub3" tag="div">
          Subtitle 3/Pretendard/Medium/14px
        </Subtitle>
        <Subtitle type="sub4" tag="div">
          Subtitle 2/Pretendard/Medium/12px
        </Subtitle>
      </div>
      <div className=" mb-4">
        <Body type="body1" tag="div">
          Body 1/Pretendard/Regular/16px
        </Body>
        <Body type="body2" tag="p">
          Body 2/Pretendard/Regular/14px
        </Body>
        <Body type="body3"> Body 3/Pretendard/Regular/12px </Body>
      </div>
    </div>
  );
}
