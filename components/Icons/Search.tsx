import IconBase, { type IconProps } from './IconBase';

const Search = (props: Omit<IconProps, 'children'>) => {
  return (
    <IconBase viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g id="search">
        <circle
          id="Ellipse 1"
          cx="9.8995"
          cy="9.89951"
          r="6.25"
          transform="rotate(-45 9.8995 9.89951)"
          stroke="inherit"
          strokeWidth="1.5"
        />
        <path
          id="Vector 1"
          d="M14.1416 14.1422L20.5056 20.5061"
          stroke="inherit"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </g>
    </IconBase>
  );
};

export default Search;
