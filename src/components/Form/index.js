import { useState } from 'react';
import { Container } from '../Container';
import { ReactComponent as SavingsIcon } from '../../icons/savings_2.svg';
import './style.scss';
import { Button } from '../Button';
import { Input } from '../Input';
import { Modal } from '../Modal';

export const Form = ({ className }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className={`form ${className}`}>
      <Container>
        <div className='form__wrapper'>
          <div className='form__badge'>
            <SavingsIcon className='form__badgeIcon' />
            <p className='form__badgeText'>
              You will be surprised how affordable gutter guards are!
            </p>
          </div>
          <div id='form' className='form__innerWrapper'>
            <h2 className='form__heading'>
              See How Much Gutter Guards Cost In The XX, XXX Area
            </h2>
            <div className='form__inputWrapper'>
              <h3 className='form__title'>What is your ZIP Code?</h3>
              <form className='form__form'>
                <Input
                  label='Enter ZIP Code'
                  className='form__input'
                  id='zip'
                  type='text'
                  name='zip'
                  placeholder='Enter ZIP Code'
                  required
                />
                <p className='form__formNote'>Free, no-obligation estimates.</p>
                <Button
                  className='form__button'
                  onClick={() => setShowModal(true)}
                >
                  Get estimate
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
      <Modal isOpen={showModal} onClose={setShowModal} />
    </section>
  );
};
