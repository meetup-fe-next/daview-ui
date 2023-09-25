import cn from 'classnames';
import Headline from '@/components/Typography/Headline';
import Button from '@/components/Button';

const NoResultContainer = () => {
  return (
    <>
      <section
        className={cn(
          'mt-4 flex h-[calc(100vh-192px)] flex-col items-center justify-center justify-self-stretch rounded-lg border border-secondary-300 bg-secondary-100',
        )}
      >
        <Headline type="h4" className={cn('mb-2')}>
          찾고 있는 강의가 없나요?
        </Headline>
        <Button size="lg" color="dark" className={cn('mb-8 w-[191px]')}>
          강의 등록하기
        </Button>
        <Headline type="h5" color="grey-600">
          이런 검색어는 어떠세요?
        </Headline>
        <div className="mt-2 flex w-[251px] flex-wrap items-center gap-x-1 gap-y-2">
          <Button color="white" size="sm">
            드림코드엘리
          </Button>
          <Button color="white" size="sm">
            드림코드엘리
          </Button>
          <Button color="white" size="sm">
            드림코드엘리
          </Button>
          <Button color="white" size="sm">
            드림코드엘리
          </Button>
          <Button color="white" size="sm">
            드림코드엘리
          </Button>
          <Button color="white" size="sm">
            드림코드엘리
          </Button>
          <Button color="white" size="sm">
            드림코드엘리
          </Button>
          <Button color="white" size="sm">
            드림코드엘리
          </Button>
          <Button color="white" size="sm">
            드림코드엘리
          </Button>
        </div>
      </section>
    </>
  );
};

export default NoResultContainer;
