import { Advantages } from '../../components/Advantages';
import { Footer } from '../../components/Footer';
import { Form } from '../../components/Form';
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
        <Form className='mainPage__form' />
      </main>
      <Footer />
    </div>
  );
};
