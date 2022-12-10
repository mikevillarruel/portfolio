import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import WorkIcon from '@mui/icons-material/Work';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import codeIcon from '../assets/images/code-icon.svg';
import './Nav.css';

export const Nav = () => {
  const [value, setValue] = useState(0);

  const handleChange = (newValue: number) => {
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
          orientation="vertical"
          value={value}
          onChange={(_, value) => handleChange(value)}
          TabIndicatorProps={{
            style: {
              backgroundColor: 'var(--primary)',
            },
          }}
        >
          <Tab
            label="HOME"
            icon={<HomeIcon />}
            iconPosition="start"
            to="/"
            component={Link}
          />
          <Tab
            label="ABOUT ME"
            icon={<AccountCircleIcon />}
            iconPosition="start"
            to="/about"
            component={Link}
          />
          <Tab
            label="PROJECTS"
            icon={<WorkIcon />}
            iconPosition="start"
            to="/projects"
            component={Link}
          />
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
