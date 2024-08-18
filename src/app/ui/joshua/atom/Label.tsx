import { colors } from '@/styles/colors';
import { sizes } from '@/styles/size';
import { ListItemText, TypographyProps } from '@mui/material';

export type LabelProps = {
  text?: string;
  fontSize?: keyof typeof sizes.fontSize;
  color?: keyof typeof colors.text;
};

const Label = ({ text = 'Default Label', color = 'primary', fontSize = 'medium' }: LabelProps) => {
  return (
    <ListItemText
      primary={text}
      primaryTypographyProps={{
        style: { fontSize: sizes.fontSize[fontSize], color: colors.text[color] },
        component: 'span',
      }}
    />
  );
};
export default Label;
