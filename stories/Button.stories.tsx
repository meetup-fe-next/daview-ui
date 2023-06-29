import Button from '@/components/Button';

export default {
  title: 'components/Button',
  component: Button,
};

export const Primary = () => <Button color="primary">Primary</Button>;

export const Small = () => <Button size="sm">Small</Button>;

export const Outline = () => <Button shape="outline">Outline</Button>;
