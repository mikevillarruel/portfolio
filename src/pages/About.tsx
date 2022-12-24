import { useContext } from 'react';
import profileImage from '../assets/images/profile.jpg';
import cSharpIcon from '../assets/images/stack/icons8-c-sharp-logo.svg';
import cssIcon from '../assets/images/stack/icons8-css3.svg';
import dockerIcon from '../assets/images/stack/icons8-docker.svg';
import gitIcon from '../assets/images/stack/icons8-git.svg';
import htmlIcon from '../assets/images/stack/icons8-html-5.svg';
import javaIcon from '../assets/images/stack/icons8-java.svg';
import javascriptIcon from '../assets/images/stack/icons8-javascript.svg';
import nodejsIcon from '../assets/images/stack/icons8-nodejs.svg';
import pythonIcon from '../assets/images/stack/icons8-python.svg';
import reactIcon from '../assets/images/stack/icons8-react.svg';
import typescriptIcon from '../assets/images/stack/icons8-typescript.svg';
import sqlIcon from '../assets/images/stack/sql.svg';
import { LanguageContext } from '../context/LanguageContext';
import './About.css';

interface Icon {
  name: string;
  image: string;
}

export const About = () => {
  const { content } = useContext(LanguageContext);
  document.title = `${content.michael_villarruel} | ${content.about_me}`;

  const icons: Icon[] = [
    { name: 'HTML', image: htmlIcon },
    { name: 'CSS', image: cssIcon },
    { name: 'JavaScript', image: javascriptIcon },
    { name: 'TypeScript', image: typescriptIcon },
    { name: 'Python', image: pythonIcon },
    { name: 'Java', image: javaIcon },
    { name: 'C#', image: cSharpIcon },
    { name: 'SQL', image: sqlIcon },
    { name: 'React.js', image: reactIcon },
    { name: 'Node.js', image: nodejsIcon },
    { name: 'Git', image: gitIcon },
    { name: 'Docker', image: dockerIcon },
  ];

  return (
    <div className="about-page">
      <div className="description-container">
        <div>
          <h1>{content.about_me}</h1>
          <p>{content.about_description}</p>
        </div>
        <div>
          <img src={profileImage} alt="Profile" />
        </div>
      </div>
      <div className="technologies-container">
        <div>
          <h3>{content.technologies_i_have_work_with}</h3>
        </div>
        <div className="stack-container">
          {icons.map((icon, index) => (
            <div className="icon-container" key={index}>
              <img src={icon.image} alt={icon.name} />
              <h6>{icon.name}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
