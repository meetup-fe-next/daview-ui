import { getContributors } from '@/server/libs/profileSDK';
import Image from 'next/image';

const GithubProfile = () => {
  const contributors = getContributors();

  return (
    <section className="absolute bottom-0 mb-[42px]">
      {contributors.map(({ login, avatar_url }) => {
        return <Image key={login} alt="profile" src={avatar_url} width="50" height="50" />;
      })}
    </section>
  );
};

export default GithubProfile;
