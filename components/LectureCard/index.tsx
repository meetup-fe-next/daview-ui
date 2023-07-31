import cn from 'classnames';
import Link from 'next/link';
import Body from '@/components/Typography/Body';
import Headline from '@/components/Typography/Headline';
import { Profile, Unknown } from '@/components/Icons';
import Subtitle from '@/components/Typography/Subtitle';
import Badge from '@/components/Badge';
import { MAX_HASHTAGS } from './LectureCard.constants';
import Button from '@/components/Button';

export type LectureCardItem = {
  uuid: number;
  lecture: string;
  creator: string;
  category: string;
  platform: string[];
  hashtags: string[];
  languages: string[];
  summary: string;
  link: string;
};

type LectureCardProps = {
  item: LectureCardItem;
  onClick: (uuid: number) => void;
};

const LectureCard = ({ item, onClick }: LectureCardProps) => {
  const cardBgColor = getBackGroundColor(item.category);
  const maxHashtags = MAX_HASHTAGS;
  const extraHashtagsCount = Math.max(item.hashtags.length - maxHashtags, 0);

  return (
    <li key={item.uuid}>
      {/* 이 부분 상세 페이지 이동으로 수정되어야 함. */}
      <Link href={item.link}>
        <article className={cn(`mb-2 flex h-[314px] w-full flex-col rounded-2xl p-5 ${cardBgColor}`)}>
          <Body type="body2">{item.category}</Body>
          <Headline type="h3">{item.lecture}</Headline>
          <div className="flex items-center">
            <Profile size="sm" />
            <Subtitle className="ml-1 mt-[0.5px]" type="sub3">{`${item.creator} | `}</Subtitle>
            <Unknown className="ml-2 mt-3" size="md" />
            <Subtitle className="mt-[0.5px]" type="sub3">
              {item.platform.join(', ')}
            </Subtitle>
          </div>
          <Body type="body2" className="line-clamp-4 h-[85px]">
            {item.summary}
          </Body>
          <div className="mt-auto">
            <div className="flex gap-1">
              {item.hashtags.slice(0, maxHashtags).map((hashtag, index) => (
                <Badge key={index}>{hashtag}</Badge>
              ))}
              {extraHashtagsCount > 0 && <Badge>{`+${extraHashtagsCount}`}</Badge>}
            </div>
            <Button className="mt-4 w-full">강좌 바로가기</Button>
          </div>
        </article>
      </Link>
    </li>
  );
};

export default LectureCard;

const getBackGroundColor = (category: string) => {
  const colorMap: { [key: string]: string } = {
    Frontend: 'bg-yellow',
    Backend: 'bg-primary-300',
    Architecture: 'bg-blue-300',
    Algorithm: 'bg-pink',
    Database: 'bg-green',
  };

  return colorMap[category] || 'bg-grey-300';
};
