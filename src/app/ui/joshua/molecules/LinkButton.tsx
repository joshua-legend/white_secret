'use client';
import Icon, { IconProps } from '../atom/Icon';
import { ListItemButton, ListItemText } from '@mui/material';
import Link from 'next/link';
import Label, { LabelProps } from '../atom/Label';
import { colors } from '@/styles/colors';
import { isCurrentRoute } from '@/util/routerUtils';
import { determineCurruentColor, stateMapper } from '@/util/colorUtils';

export type LinkButtonProps = {
  href: string; // 네비게이션 링크 경로
  iconprops: IconProps;
  labelprops: LabelProps;
};

const LinkButton = ({ href, iconprops, labelprops }: LinkButtonProps) => {
  const currentState = stateMapper.currentState(isCurrentRoute(href));
  return (
    <Link href={href} passHref style={{ textDecoration: 'none' }}>
      <ListItemButton
        sx={{
          ':hover': { color: colors.text.current },
          padding: '0px',
          color: currentState,
          display: 'flex',
          gap: '10px',
        }}
      >
        <Icon {...iconprops} color={currentState} />
        <Label {...labelprops} color={currentState} />
      </ListItemButton>
    </Link>
  );
};
export default LinkButton;
