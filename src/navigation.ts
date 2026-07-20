import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

  export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    },
    {
      text: 'Quién soy',
      href: getPermalink('/quien-soy'),
    },
    {
      text: 'Actividades',
      href: getPermalink('/actividades'),
    },
    {
      text: 'Galería',
      href: getPermalink('/galeria'),
    },
    {
      text: 'Filósofas',
      href: getPermalink('/filosofas'),
    },
    {
      text: 'Noticias',
      href: getPermalink('/blog'),
    },
    {
      text: 'Contacto',
      href: getPermalink('/contacto'),
    },
  ],
};