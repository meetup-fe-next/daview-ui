import IconBase, { type IconProps } from './IconBase';

const ExclamationMark = (props: Omit<IconProps, 'children'>) => {
  return (
    <IconBase viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.43 5.031H7.57V3.894H6.43V5.03Zm0 5.075H7.57V6.17H6.43v3.937ZM7 1.328a5.69 5.69 0 0 0-5.688 5.688A5.69 5.69 0 0 0 7 12.703a5.69 5.69 0 0 0 5.688-5.687A5.69 5.69 0 0 0 7 1.328Z"
        fill="#E35F43"
      />
    </IconBase>
  );
};

export default ExclamationMark;
