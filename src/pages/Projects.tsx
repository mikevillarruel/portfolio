import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { usePageTitle } from '../hooks/usePageTitle';

export const Projects = () => {
  const { content } = useContext(LanguageContext);
  usePageTitle(content.projects);

  return <div>Projects</div>;
};
