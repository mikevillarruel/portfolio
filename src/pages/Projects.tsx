import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export const Projects = () => {
  const { content } = useContext(LanguageContext);
  document.title = `${content.michael_villarruel} | ${content.projects}`;

  return <div>Projects</div>;
};
