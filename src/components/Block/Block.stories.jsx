import Block from './Block';

export default {
  title: 'Components/Block',
  component: Block,
  argTypes: {
    onClick: { action: 'clicked' },
    children: { name: 'Text', control: 'text', defaultValue: 'Button' },
  },
};

const Template = (args) => <Block {...args}>{args.children}</Block>;

export const Success = Template.bind({});
