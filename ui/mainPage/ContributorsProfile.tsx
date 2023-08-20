import Image from 'next/image';
import { use } from 'react';
import { getContributors } from '@/server/controllers/contributors';
import { ContributorsData } from '@/types/contributors.type';

const ContributorsProfile = () => {
  const contributors: ContributorsData[] = use(getContributors());

  return (
    <section className="absolute bottom-0 mb-[42px] flex gap-x-3 [&>img]:rounded-[60px] [&>img]:border [&>img]:border-secondary-900">
      {contributors.map(({ login, avatar_url }) => {
        return <Image key={login} alt="profile" src={avatar_url} width="40" height="40" />;
      })}
    </section>
  );
};

export default ContributorsProfile;
