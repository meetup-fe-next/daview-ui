import IconBase, { type IconProps } from './IconBase';

const Profile = (props: Omit<IconProps, 'children'>) => {
  return (
    <IconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M16 9.14286H9.14286V16H6.85714V9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286Z" />
    </IconBase>
  );
};

export default Profile;
