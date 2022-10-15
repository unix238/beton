import logo from './components/Icons/logo.svg';
import email from './components/Icons/email.svg';
import phone from './components/Icons/phone.svg';

function App() {
  return (
    <div className='App'>
      <div className='navbar'>
        <div className='navbar__sections'>
          <div className='navbar__section'>
            <img src={logo} alt='logo' />
          </div>
          <div className='navbar__section navbar__links__section'>
            <div className='navbar__links'>
              <div className='navbar__link'>
                <a href='#'>О производстве</a>
              </div>
              <div className='navbar__link'>
                <a href='#'>Продукты</a>
              </div>
              <div className='navbar__link'>
                <a href='#'>Преимущества</a>
              </div>

              <div className='navbar__link'>
                <a href='#'>Контакты</a>
              </div>
            </div>
            <div className='navbar__contact'>
              <a className='navbar__email' href='mailto:concrete@fida.kz'>
                <div className='navbar__contact__icon'>
                  <img src={email} alt='email' />
                </div>
                <p className='email__link'>concrete@fida.kz</p>
              </a>
              <a className='navbar__phone' href='tel:+7778 342 09 44'>
                <div className='navbar__contact__icon'>
                  <img src={phone} alt='phone' />
                </div>
                <p>8-778-342-09-44</p>
              </a>
            </div>
          </div>
          <div className='navbar__section'>
            <div className='order__call__button'>
              <p>Заказть звонок</p>
            </div>
          </div>
        </div>
      </div>
      <section className='main__section'>
        <div className='wrapper'>
          <div className='main'>
            <div className='main__title'>
              <h1>Бетонный завод Fida Concrete</h1>
            </div>
            <div className='main__subtitle'>
              <p>
                Изготовим и поставим бетон всех марок{' '}
                <span className='bold'>в любую точку Астаны за час.</span>
              </p>
            </div>
            <div className='main__button'>Заказать бесплатный звонок</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
