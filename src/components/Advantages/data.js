import { ReactComponent as Badge } from '../../icons/badge.svg';
import { ReactComponent as House } from '../../icons/modern-house.svg';
import { ReactComponent as Savings } from '../../icons/savings.svg';
import { ReactComponent as Rating } from '../../icons/rating.svg';
import { ReactComponent as Stars } from '../../icons/stars.svg';

export const ADVANTAGES = [
  {
    id: 1,
    icon: <Badge className='advantages__itemIcon' />,
    text: 'Lifetime warranty with 100% no-clog guarantee',
  },
  {
    id: 2,
    icon: <House className='advantages__itemIcon' />,
    text: 'Fits most homes',
  },
  {
    id: 3,
    icon: <Savings className='advantages__itemIcon' />,
    text: 'Installs over existing gutters saving you thousands',
  },
  {
    id: 4,
    icon: <Rating className='advantages__itemIcon' />,
    text: (
      <>
        <Stars className='advantages__itemStars' /> Сustomer rating
      </>
    ),
  },
];
