import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import { Box, Tab, Tabs, useMediaQuery } from '@mui/material';
import { Theme } from '@mui/material/styles/createTheme';
import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import { Styles } from '../interfaces/interfaces';

interface NavItem {
  label: string;
  icon: React.ReactElement;
  to: string;
}

export const NavMenu = () => {
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const { content } = useContext(LanguageContext);
  const { pathname } = useLocation();

  useEffect(() => {
    handleChange(getIndex());
  }, [pathname]);

  const navItems: NavItem[] = [
    {
      label: content.home.toUpperCase(),
      icon: <HomeIcon />,
      to: '/',
    },
    {
      label: content.about_me.toUpperCase(),
      icon: <AccountCircleIcon />,
      to: '/about',
    },
    {
      label: content.projects.toUpperCase(),
      icon: <WorkIcon />,
      to: '/projects',
    },
  ];

  const getIndex = (): number => {
    return navItems.findIndex((item) => item.to === pathname);
  };

  const [value, setValue] = useState(getIndex());

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={styles.navMenu}>
      <Tabs
        orientation={matches ? 'vertical' : 'horizontal'}
        value={value}
        onChange={(_, value) => handleChange(value)}
        TabIndicatorProps={{ sx: styles.tabIndicatorProps }}
      >
        {navItems.map((item, index) => {
          return (
            <Tab
              sx={styles.navMenuItem}
              key={index}
              label={item.label}
              icon={item.icon}
              iconPosition="start"
              to={item.to}
              component={Link}
            />
          );
        })}
      </Tabs>
    </Box>
  );
};

const styles: Styles = {
  navMenu: {
    width: '100%',
  },
  navMenuItem: {
    width: { xs: '33.3%', md: '100%' },
    paddingX: '10%',
    textDecoration: 'none',
    fontWeight: 'bold',
    textTransform: 'none',
  },
  tabIndicatorProps: {
    backgroundColor: 'primary.main',
    top: { xs: 0, md: 'auto' },
    right: { xs: 'auto', md: 0 },
  },
};
