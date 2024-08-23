import { colors } from '@/styles/colors';
import { sizes } from '@/styles/sizes';
import { TextColorKey } from '@/util/colorUtils';
import { FontSizeKey } from '@/util/sizeUtils';
import { ListItem } from '@mui/material';

export type TitleProps = {
  title?: string;
  color?: TextColorKey;
  fontSize?: FontSizeKey;
};

const Title = ({ title = 'Untitle', color = 'primary', fontSize = 'medium' }: TitleProps) => {
  return (
    <ListItem component="div" sx={{ color: colors.text[color], fontSize: sizes.fontSize[fontSize], padding: '0px' }}>
      {title}
    </ListItem>
  );
};

export default Title;
