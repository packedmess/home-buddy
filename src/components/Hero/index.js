import { Container } from '../Container';
import { ReactComponent as NbcIcon } from '../../icons/nbc.svg';
import './style.scss';

export const Hero = () => {
  return (
    <section className='hero'>
      <Container>
        <div className='hero__wrapper'>
          <h1 className='hero__heading'>
            How{' '}
            <mark className='hero__heading_marked'>Over 410,000 Americans</mark>{' '}
            Increased Their Property Value{' '}
            <mark className='hero__heading_marked'>In Under 6 Hours*</mark> With
            This Simple Upgrade.
          </h1>
          <p className='hero__text'>
            Ideal for detached and semi-detached homes with sloped roofs.
          </p>
          <div class='hero__imageWrapper'>
            <img
              class='hero__image'
              src='images/hero_image.png'
              alt='House wall'
              loading='lazy'
            />
            <div class='hero__imageBadge'>
              As seen on
              <NbcIcon width={32} height={32} class='hero__imageBadgeIcon' />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
