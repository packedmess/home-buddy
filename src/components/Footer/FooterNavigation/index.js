import { FOOTER_NAVIGATION_ITEMS } from './data';
import './style.scss';

export const FooterNavigation = () => {
  return (
    <ul className='footerNavigation'>
      {FOOTER_NAVIGATION_ITEMS.map(({ id, link, text }) => {
        return (
          <li key={id} className='footerNavigation__item'>
            <a href={link} className='footerNavigation__link'>
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
