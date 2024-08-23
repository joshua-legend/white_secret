import { colors } from '@/styles/colors';
import { TextColorKey, TextColorValue } from '@/util/colorUtils';
import { ListItemIcon } from '@mui/material';
import { ReactElement } from 'react';

export type IconProps = {
  icon: ReactElement;
  color?: TextColorKey;
};

const Icon = ({ icon, color = 'primary' }: IconProps) => {
  return <ListItemIcon sx={{ color: colors.text[color], minWidth: '0px' }}>{icon}</ListItemIcon>;
};

export default Icon;
