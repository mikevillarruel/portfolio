import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export const usePageTitle = (pageName: string) => {
  const { content } = useContext(LanguageContext);
  document.title = `${pageName} | ${content.michael_villarruel}`;
};
