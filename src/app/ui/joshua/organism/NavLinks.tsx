'use client';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PeopleIcon from '@mui/icons-material/People';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LinkButton, { LinkButtonProps } from '../molecules/LinkButton';
import IconicTitle, { IconicTitleProps } from '../molecules/IconicTitle';

const menuItems = [
  {
    title: '기사님 관리',
    icon: LocalShippingIcon,
    links: [
      {
        name: '리스트 보기',
        href: '/engineer/e_list',
        icon: FormatListBulletedIcon,
      },
      { name: '등록하기', href: '/engineer/e_register', icon: PlaylistAddIcon },
      { name: '수정하기', href: '/engineer/e_modify', icon: SettingsIcon },
    ],
  },
  {
    title: '회원 관리',
    icon: PeopleIcon,
    links: [
      {
        name: '리스트 보기',
        href: '/customers/c_list',
        icon: FormatListBulletedIcon,
      },
      {
        name: '등록하기',
        href: '/customers/c_register',
        icon: PlaylistAddIcon,
      },
      { name: '수정하기', href: '/customers/c_modify', icon: SettingsIcon },
    ],
  },
  {
    title: '스케줄',
    icon: EditCalendarIcon,
    links: [
      {
        name: '리스트 보기',
        href: '/schedule/s_list',
        icon: FormatListBulletedIcon,
      },
      { name: '추가하기', href: '/schedule/s_register', icon: PlaylistAddIcon },
      { name: '수정하기', href: '/schedule/s_modify', icon: SettingsIcon },
    ],
  },
  {
    title: '매출 관리',
    icon: TrendingUpIcon,
    links: [
      {
        name: '일자별 매출',
        href: '/sales/daily',
        icon: FormatListBulletedIcon,
      },
      { name: '주간 매출', href: '/sales/weekly', icon: PlaylistAddIcon },
      { name: '월별 매출', href: '/sales/monthly', icon: SettingsIcon },
    ],
  },
];

type NavLinksProps = {
  iconicTitleProps: IconicTitleProps;
  linkButtonsProps: LinkButtonProps;
};

const dummyItems: NavLinksProps[] = [
  {
    iconicTitleProps: { Icon: FormatListBulletedIcon, titleProps: { title: '큰 제목' } },
    linkButtonsProps: { href: '/engineer/e_list', iconprops: { icon: <FormatListBulletedIcon />, color: '#1dc4e9' }, labelprops: { color: '#1dc4e9', fontSize: 'small', text: '엄준식' } },
  },
  {
    iconicTitleProps: { Icon: FormatListBulletedIcon, titleProps: { title: '큰 제목' } },
    linkButtonsProps: { href: '/engineer/e_list', iconprops: { icon: <FormatListBulletedIcon />, color: '#1dc4e9' }, labelprops: { color: '#1dc4e9', fontSize: 'small', text: '엄준식' } },
  },
  {
    iconicTitleProps: { Icon: FormatListBulletedIcon, titleProps: { title: '큰 제목' } },
    linkButtonsProps: { href: '/engineer/e_list', iconprops: { icon: <FormatListBulletedIcon />, color: '#1dc4e9' }, labelprops: { color: '#1dc4e9', fontSize: 'small', text: '엄준식' } },
  },
];

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <>
      {dummyItems.map((v) => (
        <div>
          <IconicTitle {...v.iconicTitleProps} />
          <LinkButton {...v.linkButtonsProps} />
        </div>
      ))}
    </>
  );
};
export default NavLinks;
