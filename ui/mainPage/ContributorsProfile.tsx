'use client';

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

import { useGetContributors } from '@/hooks/queries/contributor';

const ContributorsProfile = () => {
  const { data: contributors = [] } = useGetContributors({ suspense: false });

  return (
    <div className="absolute bottom-0 mb-[42px]">
      <Image
        className="mb-[8px] ml-[18px]"
        src="/images/contributorImage.svg"
        width={125}
        height={30}
        quality={100}
        alt="기여해주신 분들"
      />
      <section className="flex gap-x-3 [&>img]:rounded-[60px] [&>img]:border [&>img]:border-secondary-900">
        {contributors.map(({ login, avatar_url, profile }) => {
          return (
            <Image
              key={login}
              alt="profile"
              src={avatar_url}
              width="40"
              height="40"
              onClick={() => {
                location.href = profile;
              }}
            />
          );
        })}
      </section>
    </div>
  );
};

export default ContributorsProfile;
