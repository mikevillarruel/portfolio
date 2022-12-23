import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import WorkIcon from '@mui/icons-material/Work';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import codeIcon from '../assets/images/code-icon.svg';
import './Nav.css';

interface NavItem {
  label: string;
  icon: React.ReactElement;
  to: string;
}

export const Nav = () => {
  const { pathname } = useLocation();
  const matches = useMediaQuery('(max-width: 800px)');

  const navItems: NavItem[] = [
    {
      label: 'HOME',
      icon: <HomeIcon />,
      to: '/',
    },
    {
      label: 'ABOUT ME',
      icon: <AccountCircleIcon />,
      to: '/about',
    },
    {
      label: 'PROJECTS',
      icon: <WorkIcon />,
      to: '/projects',
    },
  ];

  const getIndex = (): number => {
    let index = 0;
    for (let item of navItems) {
      if (item.to == pathname) {
        break;
      }
      index++;
    }
    return index;
  };

  const [value, setValue] = useState(getIndex());

  const handleChange = (newValue: number) => {
    localStorage.setItem('index', newValue.toString());
    setValue(newValue);
  };

  return (
    <div className="nav-container">
      <div className="nav-icon">
        <img src={codeIcon} alt="code icon" />
        <div>
          <hr />
        </div>
      </div>

      <div className="nav-menu">
        <Tabs
          orientation={!matches ? 'vertical' : 'horizontal'}
          value={value}
          onChange={(_, value) => handleChange(value)}
          TabIndicatorProps={{
            style: {
              backgroundColor: 'var(--primary)',
              [matches ? 'top' : 'right']: 0,
            },
          }}
        >
          {navItems.map((item, index) => {
            return (
              <Tab
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
      </div>

      <div className="nav-footer">
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/mikevillarruel/" target="_blank">
          <LinkedInIcon sx={{ color: 'white' }} fontSize="medium" />
        </a>
        {/* GitHub */}
        <a href="https://www.github.com/mikevillarruel" target="_blank">
          <GitHubIcon sx={{ color: 'white' }} fontSize="medium" />
        </a>
        {/* Email */}
        <a href="mailto:alejovillarruel@gmail.com" target="_blank">
          <MailIcon sx={{ color: 'white' }} fontSize="medium" />
        </a>
      </div>
    </div>
  );
};
