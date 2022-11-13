import './style.scss';
import { ReactComponent as YesIcon } from '../../../icons/yes.svg';
import { ReactComponent as NoIcon } from '../../../icons/no.svg';
import { Button } from '../../Button';

export const StepOne = ({ value, setValue, setStep }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className='stepOne'>
      <h1 className='stepOne__heading'>
        Are you homeowner or authrized to make property changes?
      </h1>
      <ul className='stepOne__formList'>
        <li className='stepOne__formItem'>
          <input
            className='stepOne__formItemInput'
            type='radio'
            name='yes_no'
            id='yes'
            value='Yes'
            onChange={handleChange}
          />
          <label className='stepOne__formItemLabel' htmlFor='yes'>
            <YesIcon className='stepOne__formItemIcon' />
            Yes
          </label>
        </li>
        <li className='stepOne__formItem'>
          <input
            className='stepOne__formItemInput'
            type='radio'
            name='yes_no'
            id='no'
            value='No'
            onChange={handleChange}
          />
          <label className='stepOne__formItemLabel' htmlFor='no'>
            <NoIcon className='stepOne__formItemIcon' />
            No
          </label>
        </li>
      </ul>
      <Button className='stepOne__button' onClick={() => value && setStep(2)}>
        Next
      </Button>
    </div>
  );
};
