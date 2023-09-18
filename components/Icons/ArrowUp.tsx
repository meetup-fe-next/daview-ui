import IconBase, { type IconProps } from './IconBase';

const ArrowUp = (props: Omit<IconProps, 'children'>) => {
  return (
    <IconBase viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M6.85714 8.46814L12 3M12 3L17.1429 8.41543M12 3V17.1429M3 21H21"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
};

export default ArrowUp;
