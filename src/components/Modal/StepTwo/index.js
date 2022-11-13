import { useState } from 'react';
import { Button } from '../../Button';
import { Input } from '../../Input';
import { ReactComponent as LockIcon } from '../../../icons/lock.svg';
import './style.scss';

export const StepTwo = ({ stepOneValue, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleCloseModal = () => {
    name && email && onClose(false);
  };

  return (
    <div className='stepTwo'>
      <h1 className='stepTwo__heading'>
        Are you homeowner or authrized to make property changes?
      </h1>
      <p className='stepTwo__text'>
        Your choice: <span className='stepTwo__textBold'>{stepOneValue}</span>
      </p>
      <form className='stepTwo__form'>
        <div className='stepTwo__inputWrapper'>
          <Input
            label='Full name'
            className='stepTwo__input'
            id='name'
            type='text'
            name='name'
            placeholder='Enter full name'
            required
            onChange={handleChangeName}
          />
          <Input
            label='Email address'
            className='stepTwo__input'
            id='email'
            type='email'
            name='email'
            placeholder='Enter email address'
            required
            onChange={handleChangeEmail}
          />
        </div>
        <Button
          className='stepTwo__button'
          type='submit'
          onClick={handleCloseModal}
        >
          Next
        </Button>
        <div className='stepTwo__note'>
          <LockIcon className='stepTwo__lockIcon' />
          <p className='stepTwo__noteText'>Safe, Secure and Confidential</p>
        </div>
      </form>
    </div>
  );
};
