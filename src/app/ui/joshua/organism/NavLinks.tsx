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

const menuItems = [];

type NavLinksProps = {
  iconicTitleProps: IconicTitleProps;
  linkButtonsProps: LinkButtonProps[];
};

const dummyItems: NavLinksProps[] = [
  {
    iconicTitleProps: { iconprops: { icon: <LocalShippingIcon />, color: 'secondary' }, titleProps: { title: '기사님 관리', color: 'secondary', fontSize: 'small' } },
    linkButtonsProps: [
      { href: '/engineer/e_list', iconprops: { icon: <FormatListBulletedIcon />, color: 'inActive' }, labelprops: { color: 'inActive', fontSize: 'medium', text: '리스트보기' } },
      { href: '/engineer/e_register', iconprops: { icon: <PlaylistAddIcon />, color: 'inActive' }, labelprops: { color: 'inActive', fontSize: 'medium', text: '등록하기' } },
      { href: '/engineer/e_modify', iconprops: { icon: <SettingsIcon />, color: 'inActive' }, labelprops: { color: 'inActive', fontSize: 'medium', text: '수정하기' } },
    ],
  },
  {
    iconicTitleProps: { iconprops: { icon: <PeopleIcon />, color: 'secondary' }, titleProps: { title: '회원관리', color: 'secondary', fontSize: 'small' } },
    linkButtonsProps: [
      { href: '/customers/c_list', iconprops: { icon: <FormatListBulletedIcon />, color: 'inActive' }, labelprops: { color: 'inActive', fontSize: 'medium', text: '리스트보기' } },
      { href: '/customers/c_register', iconprops: { icon: <PlaylistAddIcon />, color: 'inActive' }, labelprops: { color: 'inActive', fontSize: 'medium', text: '등록하기' } },
      { href: '/customers/c_modify', iconprops: { icon: <SettingsIcon />, color: 'inActive' }, labelprops: { color: 'inActive', fontSize: 'medium', text: '수정하기' } },
    ],
  },

  {
    iconicTitleProps: { iconprops: { icon: <EditCalendarIcon />, color: 'secondary' }, titleProps: { title: '스케줄', color: 'secondary', fontSize: 'small' } },
    linkButtonsProps: [
      { href: '/schedule/s_list', iconprops: { icon: <FormatListBulletedIcon />, color: 'inActive' }, labelprops: { color: 'inActive', fontSize: 'medium', text: '리스트보기' } },
      { href: '/schedule/s_register', iconprops: { icon: <PlaylistAddIcon />, color: 'inActive' }, labelprops: { color: 'inActive', fontSize: 'medium', text: '추가하기' } },
      { href: '/schedule/s_modify', iconprops: { icon: <SettingsIcon />, color: 'inActive' }, labelprops: { color: 'inActive', fontSize: 'medium', text: '수정하기' } },
    ],
  },
  {
    iconicTitleProps: { iconprops: { icon: <FormatListBulletedIcon />, color: 'secondary' }, titleProps: { title: '매출 관리', color: 'secondary', fontSize: 'small' } },
    linkButtonsProps: [
      { href: '/sales/daily', iconprops: { icon: <FormatListBulletedIcon />, color: 'inActive' }, labelprops: { color: 'inActive', fontSize: 'medium', text: '일자별 매출' } },
      { href: '/sales/weekly', iconprops: { icon: <PlaylistAddIcon />, color: 'inActive' }, labelprops: { color: 'inActive', fontSize: 'medium', text: '주간 매출' } },
      { href: '/sales/monthly', iconprops: { icon: <SettingsIcon />, color: 'inActive' }, labelprops: { color: 'inActive', fontSize: 'medium', text: '월별 매출' } },
    ],
  },
];

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <div>
      {dummyItems.map((v) => (
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
          <IconicTitle {...v.iconicTitleProps} />
          {v.linkButtonsProps.map((v1) => (
            <LinkButton {...v1} />
          ))}
        </ListItem>
      ))}
    </div>
  );
};
export default NavLinks;
