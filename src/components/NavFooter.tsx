import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import { Box, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Styles } from '../interfaces/interfaces';

interface FooterItem {
  href: string;
  icon: React.ReactElement;
}

export const NavFooter = () => {
  const theme = useTheme();

  const styles: Styles = {
    navFooter: {
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'center',
      justifyContent: 'space-evenly',
      backgroundColor: theme.palette.primary.main,
      paddingY: '2vh',
      top: { xs: 0, md: 'auto' },
      right: { xs: 0, md: 'auto' },
      position: { xs: 'absolute', md: 'relative' },
      maxWidth: { xs: '10%', md: '100%' },
    },
    navFooterItem: {
      margin: { xs: '10px', md: 0 },
    },
  };

  const footerLinks: FooterItem[] = [
    {
      href: 'https://www.linkedin.com/in/mikevillarruel/',
      icon: <LinkedInIcon sx={{ color: 'white' }} />,
    },
    {
      href: 'https://www.github.com/mikevillarruel',
      icon: <GitHubIcon sx={{ color: 'white' }} />,
    },
    {
      href: 'mailto:alejovillarruel@gmail.com',
      icon: <MailIcon sx={{ color: 'white' }} />,
    },
  ];

  return (
    <Box sx={styles.navFooter}>
      {footerLinks.map((link, index) => {
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
