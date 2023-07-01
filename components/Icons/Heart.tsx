import IconBase, { type IconProps } from './IconBase';

const Heart = (props: Omit<IconProps, 'children'>) => {
  return (
    <IconBase viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.2571 2.23837C16.2771 0.258375 13.0686 0.258375 11.0886 2.23837L9.99811 3.32887L8.90461 2.23387C6.92461 0.255375 3.71461 0.255375 1.73461 2.23387C-0.243893 4.21387 -0.243893 7.42387 1.73461 9.40237L2.82961 10.4974L2.82811 10.4989L9.99811 17.6674L18.2571 9.40687C20.2371 7.42837 20.2371 4.21687 18.2571 2.23837"
      />
    </IconBase>
  );
};

export default Heart;
