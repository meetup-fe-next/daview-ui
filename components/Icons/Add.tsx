import IconBase, { type IconProps } from './IconBase';

const Add = (props: Omit<IconProps, 'children'>) => {
  return (
    <IconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4 12H20" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 4L12 20" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
    </IconBase>
  );
};

export default Add;
