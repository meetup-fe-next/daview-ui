import Link from 'next/link';

import cn from 'classnames';

import Badge from '@/components/Badge';
import Button from '@/components/Button';
import Body from '@/components/Typography/Body';
import Headline from '@/components/Typography/Headline';
import Subtitle from '@/components/Typography/Subtitle';
import { Profile, Unknown } from '@/components/Icons';

import { MAX_HASHTAGS } from './LecturesCard.constants';

export type Lecture = {
  category: string;
  name: string;
  markdown: string;
  frontmatter: Frontmatter;
  objectID: string;
};

type Frontmatter = {
  hashtags: string[];
  languages: string[];
  link: string;
  platforms: string[];
  summary: string;
};

type LecturesProps = {
  item: Lecture;
  onClick: (objectID: string) => void;
};

const LecturesCard = ({ item, onClick }: LecturesProps) => {
  console.log(item);
  const { frontmatter } = item;
  const cardBgColor = getBackGroundColor(item.category);
  const maxHashtags = MAX_HASHTAGS;
  const extraHashtagsCount = Math.max(frontmatter.hashtags.length - maxHashtags, 0);

  return (
    <>
      {/* 이 부분 상세 페이지 이동으로 수정되어야 함. */}
      <Link href={frontmatter.link}>
        <article className={cn(`mb-2 flex h-[314px] w-full flex-col rounded-2xl p-5 ${cardBgColor}`)}>
          <Body type="body2">{item.category}</Body>
          <Headline type="h3">{item.name}</Headline>
          <div className="flex items-center">
            <Profile size="sm" />
            <Subtitle className="ml-1 mt-[0.5px]" type="sub3">{`${''} | `}</Subtitle>
            <Unknown className="ml-2 mt-3" size="md" />
            <Subtitle className="mt-[0.5px]" type="sub3">
              {frontmatter.platforms.join(', ')}
            </Subtitle>
          </div>
          <Body type="body2" className="line-clamp-4 h-[85px]">
            {frontmatter.summary}
          </Body>
          <div className="mt-auto">
            <div className="flex gap-1">
              {frontmatter.hashtags.slice(0, maxHashtags).map((hashtag, index) => (
                <Badge key={index}>{hashtag}</Badge>
              ))}
              {extraHashtagsCount > 0 && <Badge>{`+${extraHashtagsCount}`}</Badge>}
            </div>
            <Button className="mt-4 w-full">강좌 바로가기</Button>
          </div>
        </article>
      </Link>
    </>
  );
};

export default LecturesCard;

const getBackGroundColor = (category: string) => {
  const colorMap: { [key: string]: string } = {
    frontend: 'bg-yellow',
    backend: 'bg-primary-300',
    architecture: 'bg-blue-300',
    algorithm: 'bg-pink',
    database: 'bg-green',
  };

  return colorMap[category] || 'bg-grey-300';
};
