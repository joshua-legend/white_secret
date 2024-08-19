import { colors } from '@/styles/colors';
import { TextColorValue } from '@/util/colorUtils';
import { ListItemIcon } from '@mui/material';
import { ReactElement } from 'react';

export type IconProps = {
  icon: ReactElement;
  color?: TextColorValue;
};

const Icon = ({ icon, color }: IconProps) => {
  return <ListItemIcon sx={{ color }}>{icon}</ListItemIcon>;
};

export default Icon;
