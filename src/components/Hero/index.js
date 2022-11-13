import { Container } from '../Container';
import { ReactComponent as NbcIcon } from '../../icons/nbc.svg';
import './style.scss';

export const Hero = () => {
  return (
    <section className='hero'>
      <Container>
        <div className='hero__wrapper'>
          <div className='hero__textWrapper'>
            <h1 className='hero__heading'>
              How{' '}
              <mark className='hero__heading_marked'>
                Over 410,000 Americans
              </mark>{' '}
              Increased Their Property Value{' '}
              <mark className='hero__heading_marked'>In Under 6 Hours*</mark>{' '}
              With This Simple Upgrade.
            </h1>
            <p className='hero__text'>
              Ideal for detached and semi-detached homes with sloped roofs.
            </p>
          </div>
          <div className='hero__imageWrapper'>
            <img
              className='hero__image'
              src='images/hero_image.png'
              alt='House wall'
              loading='lazy'
            />
            <div className='hero__imageBadge'>
              <div className='hero__imageBadgeWrapper'>
                <a href='https://google.com' className='hero__imageBadgeLink'>
                  As seen on
                </a>
                <NbcIcon
                  width={32}
                  height={32}
                  className='hero__imageBadgeIcon'
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
