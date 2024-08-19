import { useRouter } from 'next/router';
import Icon, { IconProps } from '../atom/Icon';
import { ListItemButton } from '@mui/material';
import Link from 'next/link';
import Label, { LabelProps } from '../atom/Label';
import { colors } from '@/styles/colors';

type LinkButtonProps = {
  href: string; // 네비게이션 링크 경로
  iconprops: IconProps;
  labelprops: LabelProps;
};

const LinkButton = ({ href, iconprops, labelprops }: LinkButtonProps) => {
  const { pathname } = useRouter(); // 현재 경로를 가져오기 위해 useRouter 사용
  const isActive = pathname === href;

  return (
    <Link href={href} passHref style={{ textDecoration: 'none' }}>
      <ListItemButton
        sx={{
          ':hover': { color: colors.text.hover }, // hover 시 색상
          color: isActive ? colors.text.link : colors.text.drawer, // 활성/비활성 색상
        }}
      >
        <Icon {...iconprops} active={isActive} />
        <Label {...labelprops} color={isActive ? 'link' : 'drawer'} />
      </ListItemButton>
    </Link>
  );
};
export default LinkButton;
