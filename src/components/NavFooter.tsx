import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import { Box, Link } from '@mui/material';
import { Styles } from '../interfaces/interfaces';

interface FooterItem {
  href: string;
  icon: React.ReactElement;
}

export const NavFooter = () => {
  const footerItems: FooterItem[] = [
    {
      href: 'https://www.linkedin.com/in/mikevillarruel/',
      icon: <LinkedInIcon sx={styles.icon} />,
    },
    {
      href: 'https://www.github.com/mikevillarruel',
      icon: <GitHubIcon sx={styles.icon} />,
    },
    {
      href: 'mailto:alejovillarruel@gmail.com',
      icon: <MailIcon sx={styles.icon} />,
    },
  ];

  return (
    <Box sx={styles.navFooter}>
      {footerItems.map((link, index) => {
        return (
          <Link
            sx={styles.navFooterItem}
            href={link.href}
            target="_blank"
            key={index}
          >
            {link.icon}
          </Link>
        );
      })}
    </Box>
  );
};

const styles: Styles = {
  navFooter: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'primary.main',
    paddingY: { xs: 0, md: '2vh' },
    top: { xs: 0, md: 'auto' },
    right: { xs: 0, md: 'auto' },
    position: { xs: 'fixed', md: 'relative' },
    width: { xs: 'fit-content', md: '100%' },
  },
  navFooterItem: {
    margin: { xs: '10px', md: 0 },
  },
  icon: {
    color: 'background.paper',
  },
};
