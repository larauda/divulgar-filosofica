import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    },
    {
      text: 'Sobre Divulgar',
      href: getPermalink('/sobre-divulgar'),
    },
    {
      text: 'Temáticas',
      href: getPermalink('/tematicas'),
    },
    {
      text: 'Actividades',
      href: getPermalink('/actividades'),
    },
    {
      text: 'Agenda',
      href: getPermalink('/agenda'),
    },
    {
      text: 'Reflexiones',
      href: getPermalink('/reflexiones'),
    },
    {
      text: 'Galería',
      href: getPermalink('/galeria'),
    },
  
  ],
};