import logo from './components/Icons/logo.svg';
import email from './components/Icons/email.svg';
import phone from './components/Icons/phone.svg';
import image1 from './components/Icons/image1.png';

import adv1 from './components/Icons/advantages/image1.svg';
import adv2 from './components/Icons/advantages/image2.svg';
import adv3 from './components/Icons/advantages/image3.svg';
import adv4 from './components/Icons/advantages/image4.svg';
import adv5 from './components/Icons/advantages/image5.svg';
import adv6 from './components/Icons/advantages/image6.svg';

import photo from './components/Icons/photo.png';

import beton from './components/Icons/beton.svg';

import ReactImageGallery from 'react-image-gallery';

function App() {
  const images = [
    {
      original: image1,
    },
    {
      original: image1,
    },
    {
      original: image1,
    },
  ];

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
      <section className='about__factory'>
        <div className='wrapper'>
          <div className='about__factory__parts'>
            <div className='about__factory__left'>
              <div className='about__factory__images'>
                <ReactImageGallery
                  items={images}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  showNav={false}
                  showBullets={true}
                  showThumbnails={false}
                  // width='100%'
                  // height='100%'
                />
              </div>
            </div>
            <div className='about__factory__right'>
              <div className='about__factory__right__title'>
                <h2>О производстве</h2>
              </div>
              <div className='about__factory__list'>
                <ul>
                  <li>
                    Оперируем на бетонном заводе ELBA немецкого производства.
                  </li>
                  <li>
                    <span className='factory__bold'>
                      Производительность завода:
                    </span>{' '}
                    60 куб.м/час
                  </li>
                  <li>
                    <span className='factory__bold'>Объем силоса:</span> 4
                    силоса по 120 тонн материала
                  </li>
                  <li>
                    <span className='factory__bold'>Тип:</span> зимний, скиповая
                    подача инертного
                  </li>
                  <li>
                    <span className='factory__bold'>Оснащение завода:</span>{' '}
                    компьютерное управление, прогрев инертногоматериала в
                    бункерах, подогрев воды, весы автомобильные,железнодорожный
                    тупик.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='advantages__section'>
        <h2 className='advantages__main__title'>Наши Преимущества</h2>
        <div className='wrapper'>
          <div className='advantages'>
            <div className='advantages__item'>
              <div className='advantages__item__icon'>
                <img src={adv4} alt='advantage1' />
              </div>
              <div className='advantages__text'>
                <div className='advatanges__title'>Немецкое оборудование</div>
                <div className='advantages__subtitle'>
                  производим бетон на оборудовании немецкого качества
                </div>
              </div>
            </div>
            <div className='advantages__item'>
              <div className='advantages__item__icon'>
                <img src={adv2} alt='advantage1' />
              </div>
              <div className='advantages__text'>
                <div className='advatanges__title'>Немецкое оборудование</div>
                <div className='advantages__subtitle'>
                  производим бетон на оборудовании немецкого качества
                </div>
              </div>
            </div>
            <div className='advantages__item'>
              <div className='advantages__item__icon'>
                <img src={adv1} alt='advantage1' />
              </div>
              <div className='advantages__text'>
                <div className='advatanges__title'>Немецкое оборудование</div>
                <div className='advantages__subtitle'>
                  производим бетон на оборудовании немецкого качества
                </div>
              </div>
            </div>
            <div className='advantages__item'>
              <div className='advantages__item__icon'>
                <img src={adv3} alt='advantage1' />
              </div>
              <div className='advantages__text'>
                <div className='advatanges__title'>Немецкое оборудование</div>
                <div className='advantages__subtitle'>
                  производим бетон на оборудовании немецкого качества
                </div>
              </div>
            </div>
            <div className='advantages__item'>
              <div className='advantages__item__icon'>
                <img src={adv5} alt='advantage1' />
              </div>
              <div className='advantages__text'>
                <div className='advatanges__title'>Немецкое оборудование</div>
                <div className='advantages__subtitle'>
                  производим бетон на оборудовании немецкого качества
                </div>
              </div>
            </div>
            <div className='advantages__item'>
              <div className='advantages__item__icon'>
                <img src={adv6} alt='advantage1' />
              </div>
              <div className='advantages__text'>
                <div className='advatanges__title'>Немецкое оборудование</div>
                <div className='advantages__subtitle'>
                  производим бетон на оборудовании немецкого качества
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='prices__section'>
        <h2 className='prices__main__title'>Актуальная цена на бетон</h2>
        <div className='wrapper'>
          <div className='prices__items'>
            <div className='prices__items__border'>
              <div className='pricec__item'>
                <div className='item__logo'>
                  <img src={beton} alt='logo1' />
                </div>
                <div className='prices__item__texts'>
                  <div className='prices__title'>Бетон М-100</div>
                  <div className='prices__subtitle'>От: 19030₸</div>
                </div>
              </div>
              <div className='prices__buy__button'>Заказать</div>
            </div>

            <div className='prices__items__border'>
              <div className='pricec__item'>
                <div className='item__logo'>
                  <img src={beton} alt='logo1' />
                </div>
                <div className='prices__item__texts'>
                  <div className='prices__title'>Бетон М-100</div>
                  <div className='prices__subtitle'>От: 19030₸</div>
                </div>
              </div>
              <div className='prices__buy__button'>Заказать</div>
            </div>

            <div className='prices__items__border'>
              <div className='pricec__item'>
                <div className='item__logo'>
                  <img src={beton} alt='logo1' />
                </div>
                <div className='prices__item__texts'>
                  <div className='prices__title'>Бетон М-100</div>
                  <div className='prices__subtitle'>От: 19030₸</div>
                </div>
              </div>
              <div className='prices__buy__button'>Заказать</div>
            </div>

            <div className='prices__items__border'>
              <div className='pricec__item'>
                <div className='item__logo'>
                  <img src={beton} alt='logo1' />
                </div>
                <div className='prices__item__texts'>
                  <div className='prices__title'>Бетон М-100</div>
                  <div className='prices__subtitle'>От: 19030₸</div>
                </div>
              </div>
              <div className='prices__buy__button'>Заказать</div>
            </div>
          </div>
          <div className='center'>
            <div className='button__all__prices'>Скачать полный прайс</div>
          </div>
        </div>
      </section>

      <section className='reviews__section'>
        <div className='reviews__main__title'>Отзывы наших клиентов</div>
        <div className='wrapper'>
          <div className='reviews__items'>
            <div className='review__item'>
              <div className='review__top'>
                <div className='review__top__icon'>
                  <img src={photo} alt='photo' />
                </div>
                <div className='review__top__text'>
                  <div className='review__top__name'>Имя Фамилия</div>
                  <div className='review__top__position'>
                    Сотрудник BI Group, главный инженер Строительный объект: ЖК
                    Астана
                  </div>
                </div>
              </div>
              <div className='review__bottom'>
                Cервис на высшем уровне! Доставили за 40 минут. Спасибо! Cервис
                на высшем уровне! Доставили за 40 минут. Спасибо! Сотрудники
                вежливые, быстро связались и проинформировали.
              </div>
            </div>

            <div className='review__item'>
              <div className='review__top'>
                <div className='review__top__icon'>
                  <img src={photo} alt='photo' />
                </div>
                <div className='review__top__text'>
                  <div className='review__top__name'>Имя Фамилия</div>
                  <div className='review__top__position'>
                    Сотрудник BI Group, главный инженер Строительный объект: ЖК
                    Астана
                  </div>
                </div>
              </div>
              <div className='review__bottom'>
                Cервис на высшем уровне! Доставили за 40 минут. Спасибо! Cервис
                на высшем уровне! Доставили за 40 минут. Спасибо! Сотрудники
                вежливые, быстро связались и проинформировали.
              </div>
            </div>

            <div className='review__item'>
              <div className='review__top'>
                <div className='review__top__icon'>
                  <img src={photo} alt='photo' />
                </div>
                <div className='review__top__text'>
                  <div className='review__top__name'>Имя Фамилия</div>
                  <div className='review__top__position'>
                    Сотрудник BI Group, главный инженер Строительный объект: ЖК
                    Астана
                  </div>
                </div>
              </div>
              <div className='review__bottom'>
                Cервис на высшем уровне! Доставили за 40 минут. Спасибо! Cервис
                на высшем уровне! Доставили за 40 минут. Спасибо! Сотрудники
                вежливые, быстро связались и проинформировали.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
