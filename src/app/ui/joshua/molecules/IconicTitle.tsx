import Title, { TitleProps } from '../atom/Title';
import Icon, { IconProps } from '../atom/Icon';

export type IconicTitleProps = {
  titleProps: TitleProps;
  iconprops: IconProps;
};

const IconicTitle = ({ iconprops, titleProps }: IconicTitleProps) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <Icon {...iconprops} />
      <Title {...titleProps} />
    </div>
  );
};

export default IconicTitle;
