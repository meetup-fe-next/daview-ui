import IconBase, { type IconProps } from './IconBase';

const Unknown = (props: Omit<IconProps, 'children'>) => {
  return (
    <IconBase viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M0.333344 10.8334V0.166748H13.6667V10.8334H0.333344ZM1.66668 2.83341V9.50008H12.3333V2.83341H1.66668Z"
        fill="#48464C"
      />
    </IconBase>
  );
};

export default Unknown;
