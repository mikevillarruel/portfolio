import { Button } from '@mui/material';
import codeIcon from '../assets/images/code-icon.svg';
import './Home.css';

export const Home = () => {
  return (
    <div className="home-page">
      <div className="description-container">
        <div className="internal-container">
          <h1>Michael Villarruel</h1>
          <h4>Bachelor of Engineering (BEng), Systems Engineering </h4>
          <h4>&</h4>
          <h4>Software Developer</h4>
          <br />
          <p>
            I'm a Software Developer resident in Ecuador and a tech industry
            lover. My main focus is to create applications that can help to
            solve real problems and make people's lives easier.
          </p>
          <Button
            variant="contained"
            onClick={() => {
              window.open(
                'https://www.canva.com/design/DAFQLFLkQ9M/MP2gNRS8jup3N9F_OeV9SQ/view?utm_content=DAFQLFLkQ9M&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu',
                '_blank'
              );
            }}
          >
            Download CV
          </Button>
        </div>
      </div>
      <div className="image-container">
        <img src={codeIcon} alt="code icon" />
      </div>
    </div>
  );
};
