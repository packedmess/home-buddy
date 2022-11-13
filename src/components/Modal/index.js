import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { ReactComponent as CloseIcon } from '../../icons/close.svg';
import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';
import './style.scss';

export const Modal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(null);
  const [stepOneValue, setStepOneValue] = useState(null);

  useEffect(() => {
    const handleCloseModal = (e) => {
      if (e.key === 'Escape') {
        onClose(false);
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleCloseModal);
      document.body.style.overflow = 'hidden';
      setStep(1);
    } else {
      window.removeEventListener('keydown', handleCloseModal);
      document.body.style.overflow = 'unset';
      setStep(null);
    }
  }, [isOpen, onClose]);

  if (!isOpen) {
    return;
  }

  return ReactDOM.createPortal(
    <div
      className='modal'
      role='dialog'
      aria-labelledby='Form modal'
      aria-modal='true'
    >
      <div
        className={`modal__header 
      ${step && `modal__header_step${step}`}
      `}
      >
        <button
          type='button'
          aria-label='Close modal'
          className='modal__closeButton'
          onClick={() => onClose(false)}
        >
          <CloseIcon />
        </button>
      </div>
      {step === 1 && <StepOne setValue={setStepOneValue} setStep={setStep} />}
      {step === 2 && <StepTwo stepOneValue={stepOneValue} onClose={onClose} />}
    </div>,
    document.getElementById('root')
  );
};
