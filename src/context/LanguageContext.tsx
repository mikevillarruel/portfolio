import { createContext, useState } from 'react';
import en from '../assets/content-page/en.json';
import es from '../assets/content-page/es.json';

interface LanguageContextProps {
  language: string;
  handleLanguageChange: (language: string) => void;
  content: typeof en;
}

export const LanguageContext = createContext({} as LanguageContextProps);

export const LanguageProvider = ({ children }: any) => {
  const lan = localStorage.getItem('lan');
  const initialLanguage = lan ? lan : 'en';
  const [language, setLanguage] = useState(initialLanguage);
  const [content, setContent] = useState(language == 'es' ? es : en);

  const handleLanguageChange = (language: string) => {
    localStorage.setItem('lan', language);
    language == 'es' ? setContent(es) : setContent(en);
    setLanguage(language);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        handleLanguageChange,
        content,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
