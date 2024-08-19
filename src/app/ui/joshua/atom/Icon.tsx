import { colors } from '@/styles/colors';
import { ListItemIcon } from '@mui/material';
import { ReactElement } from 'react';

export type IconProps = {
  icon: ReactElement;
  active?: boolean;
};

const Icon = ({ icon, active = false }: IconProps) => {
  return (
    <ListItemIcon
      sx={{
        color: active ? colors.text.link : colors.text.drawer,
      }}
    >
      {icon}
    </ListItemIcon>
  );
};

export default Icon;
