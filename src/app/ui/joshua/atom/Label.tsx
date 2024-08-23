import { colors } from '@/styles/colors';
import { sizes } from '@/styles/sizes';
import { TextColorKey } from '@/util/colorUtils';
import { FontSizeKey } from '@/util/sizeUtils';
import { ListItemText } from '@mui/material';

export type LabelProps = {
  text?: string;
  fontSize?: FontSizeKey;
  color?: TextColorKey;
};

const Label = ({ text = 'Default Label', color = 'primary', fontSize = 'medium' }: LabelProps) => {
  return (
    <ListItemText
      sx={{ ':hover': { color: colors.text.current }, fontSize: sizes.fontSize[fontSize], color: colors.text[color] }}
      primary={text}
      primaryTypographyProps={{
        component: 'span',
      }}
    />
  );
};
export default Label;
