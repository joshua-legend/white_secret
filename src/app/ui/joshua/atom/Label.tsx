import { colors } from '@/styles/colors';
import { sizes } from '@/styles/size';
import { ListItemText, TypographyProps } from '@mui/material';

type LabelProps = {
  primary?: string;
  fontSize?: keyof typeof sizes.fontSize;
  color?: keyof typeof colors.text;
};

const Label = ({ primary = 'Default Label', color = 'primary', fontSize = 'medium' }: LabelProps) => {
  return (
    <ListItemText
      primary={primary}
      primaryTypographyProps={{
        style: { fontSize: sizes.fontSize[fontSize], color: colors.text[color] },
        component: 'span',
      }}
    />
  );
};
export default Label;
