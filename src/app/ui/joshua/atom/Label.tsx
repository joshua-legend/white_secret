import { colors } from '@/styles/colors';
import { sizes } from '@/styles/size';
import { TextColorValue } from '@/util/colorUtils';
import { ListItemText, TypographyProps } from '@mui/material';

export type LabelProps = {
  text?: string;
  fontSize?: keyof typeof sizes.fontSize;
  color?: TextColorValue;
};

const Label = ({ text = 'Default Label', color, fontSize = 'medium' }: LabelProps) => {
  return (
    <ListItemText
      primary={text}
      primaryTypographyProps={{
        style: { fontSize: sizes.fontSize[fontSize], color },
        component: 'span',
      }}
    />
  );
};
export default Label;
