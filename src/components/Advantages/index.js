import { Container } from '../Container';
import { ADVANTAGES } from './data';
import './style.scss';

export const Advantages = () => {
  return (
    <section className='advantages'>
      <Container>
        <h2 className='advantages__heading'>Advantages</h2>
        <ul className='advantages__list'>
          {ADVANTAGES.map(({ id, icon, text }) => {
            return (
              <li key={id} className='advantages__item'>
                {icon}
                <p className='advantages__itemText'>{text}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};
