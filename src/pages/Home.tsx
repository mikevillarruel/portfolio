import { Button } from '@mui/material';
import { useContext } from 'react';
import codeIcon from '../assets/images/code-icon.svg';
import { LanguageContext } from '../context/LanguageContext';
import './Home.css';

export const Home = () => {
  const { content } = useContext(LanguageContext);
  document.title = `${content.michael_villarruel} | ${content.home}`;

  return (
    <div className="home-page">
      <div className="description-container">
        <div className="internal-container">
          <h1>{content.michael_villarruel}</h1>
          <h4>{content.bachelor_degree}</h4>
          <h4>&</h4>
          <h4>{content.software_developer}</h4>
          <br />
          <p>{content.home_description}</p>
          <Button
            variant="contained"
            onClick={() => {
              window.open(
                'https://www.canva.com/design/DAFQLFLkQ9M/MP2gNRS8jup3N9F_OeV9SQ/view?utm_content=DAFQLFLkQ9M&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu',
                '_blank'
              );
            }}
          >
            {content.download_cv}
          </Button>
        </div>
      </div>
      <div className="image-container">
        <img src={codeIcon} alt="code icon" />
      </div>
    </div>
  );
};
