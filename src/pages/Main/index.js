import { Advantages } from '../../components/Advantages';
import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import './style.scss';

export const MainPage = () => {
  return (
    <div className='mainPage'>
      <Header />
      <main className='main'>
        <Hero />
        <Advantages />
      </main>
    </div>
  );
};
