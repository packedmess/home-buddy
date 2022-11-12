import { Logo } from '../Logo';
import { Container } from '../Container';
import './style.scss';

export const Header = () => {
  return (
    <header className='header'>
      <Container>
        <div className='header__wrapper'>
          <Logo withSubstring />
          <a href='#form' className='header__link'>
            Link to form
          </a>
        </div>
      </Container>
    </header>
  );
};
