import { Logo } from '../Logo';
import { Container } from '../Container';
import { FooterNavigation } from './FooterNavigation';
import './style.scss';

export const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <div className='footer__wrapper'>
          <Logo className='footer__logo' />
          <FooterNavigation />
        </div>
      </Container>
    </footer>
  );
};
