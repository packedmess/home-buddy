import ReactDOM from 'react-dom';
import './style.scss';

export const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return;
  }

  return ReactDOM.createPortal(
    <div className='modal'>
      <div onClick={() => onClose(false)}>Modal Content</div>
    </div>,
    document.getElementById('root')
  );
};
