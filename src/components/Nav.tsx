import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import WorkIcon from '@mui/icons-material/Work';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import Select from '@mui/material/Select/Select';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import codeIcon from '../assets/images/code-icon.svg';
import { LanguageContext } from '../context/LanguageContext';
import './Nav.css';

interface NavItem {
  label: string;
  icon: React.ReactElement;
  to: string;
}

export const Nav = () => {
  const { pathname } = useLocation();
  const matches = useMediaQuery('(max-width: 800px)');
  const { language, handleLanguageChange, content } =
    useContext(LanguageContext);
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
      <div className="select-language">
        <LanguageIcon />
        <Select
          variant="standard"
          value={language}
          label="Language"
          onChange={(event) => handleLanguageChange(event.target.value)}
        >
          <MenuItem value={'en'}>En</MenuItem>
          <MenuItem value={'es'}>Es</MenuItem>
        </Select>
      </div>

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
