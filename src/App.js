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

import cert1 from './components/Icons/cer1.png';
import cert2 from './components/Icons/cer2.png';
import cert3 from './components/Icons/cer3.png';

import photo from './components/Icons/photo.png';

import beton from './components/Icons/beton.svg';
import person1 from './components/Icons/persons/1.png';
import person2 from './components/Icons/persons/2.png';
import person3 from './components/Icons/persons/3.png';

import brand1 from './components/Icons/brands/1.png';
import brand2 from './components/Icons/brands/2.png';
import brand3 from './components/Icons/brands/3.jpg';
import brand4 from './components/Icons/brands/4.jpg';
import brand5 from './components/Icons/brands/5.png';

import ReactImageGallery from 'react-image-gallery';
import { useState } from 'react';
import Modal from 'react-modal';
import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function App() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log('dasdsada');
    emailjs
      .sendForm(
        'service_nrgq5im',
        'template_nj8cwq9',
        form.current,
        'kysivMeVeegptu56S'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  let openModal = () => {
    setIsOpen(true);
  };

  let afterOpenModal = () => {
    subtitle.style.color = '#f00';
  };

  let closeModal = () => {
    setIsOpen(false);
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '550px',
      height: '437px',
      borderRadius: '20px',
      display: 'flex',
      flexDirection: 'column',
      color: '#141F38',
      padding: '70px',
      overflow: 'hidden',
    },
  };

  const images = [
    {
      original: require('./components/carousel/1.jpg'),
    },
    {
      original: require('./components/carousel/2.jpg'),
    },
    {
      original: require('./components/carousel/3.jpg'),
    },
    {
      original: require('./components/carousel/4.jpg'),
    },
    {
      original: require('./components/carousel/7.jpg'),
    },
    {
      original: require('./components/carousel/8.jpg'),
    },
  ];

  const [isActive, setIsActive] = useState([false, false, false, true, false]);
  const data = [
    {
      title: 'Какие документы обычно выдают при доставке бетона? ',
      text: 'Да, помимо города Астана мы доставляем нашу продукцию по Казахстану. Срок доставки согласовывается во время заказа. Обычно, процесс доставки занимает от 7 до 10 дней. ',
    },
    {
      title: 'Как быстро вы осуществляете доставку? ',
      text: 'Да, помимо города Астана мы доставляем нашу продукцию по Казахстану. Срок доставки согласовывается во время заказа. Обычно, процесс доставки занимает от 7 до 10 дней. ',
    },
    {
      title: 'Какой минимальный объем вы доставляете? ',
      text: 'Да, помимо города Астана мы доставляем нашу продукцию по Казахстану. Срок доставки согласовывается во время заказа. Обычно, процесс доставки занимает от 7 до 10 дней. ',
    },
    {
      title: 'Какой техникой осуществляется доставка? ',
      text: 'Да, помимо города Астана мы доставляем нашу продукцию по Казахстану. Срок доставки согласовывается во время заказа. Обычно, процесс доставки занимает от 7 до 10 дней. ',
    },
    {
      title: 'Есть ли доставка в другие города помимо г. Астана? ',
      text: 'Да, помимо города Астана мы доставляем нашу продукцию по Казахстану. Срок доставки согласовывается во время заказа. Обычно, процесс доставки занимает от 7 до 10 дней. ',
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
                <a href='#about'>О производстве</a>
              </div>
              <div className='navbar__link'>
                <a href='#products'>Продукты</a>
              </div>
              <div className='navbar__link'>
                <a href='#advantages'>Преимущества</a>
              </div>

              <div className='navbar__link'>
                <a href='#contacts'>Контакты</a>
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
            <div className='order__call__button' onClick={openModal}>
              <p>Заказть звонок</p>
              <div>
                <Modal
                  isOpen={modalIsOpen}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel='Call'
                >
                  <form ref={form} onSubmit={sendEmail} className='modal'>
                    <div className='modal__form__text'>
                      <div className='form__title__modal'>ЗАПОЛНИТЕ ФОРМУ</div>
                      <div className='form__sub__title'>
                        и мы перезвоним вам в течении 10 минут!
                      </div>
                    </div>
                    <div className='form__inputs'>
                      <div className='form__input'>
                        <div className='form__input__title'>Ваше имя</div>
                        <input
                          type='name'
                          name='user__name'
                          className='form__input__input'
                        />
                      </div>
                      <div className='form__input'>
                        <div className='form__input__title'>Номер телефона</div>
                        <input
                          type='name'
                          name='user__phone'
                          className='form__input__input'
                        />
                      </div>
                    </div>
                    <div className='button___container'>
                      <input type='submit' className='send__button' />
                    </div>
                  </form>
                </Modal>
              </div>
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
            <div className='main__button' onClick={openModal}>
              Заказать бесплатный звонок
            </div>
          </div>
        </div>
      </section>
      <section className='about__factory' id='about'>
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
                  // custom width
                  width='100%'
                  height='100%'
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
      <section className='advantages__section' id='advantages'>
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
      <section className='prices__section' id='products'>
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
              <div className='prices__buy__button' onClick={openModal}>
                Заказать
              </div>
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
              <div className='prices__buy__button' onClick={openModal}>
                Заказать
              </div>
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
              <div className='prices__buy__button' onClick={openModal}>
                Заказать
              </div>
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
              <div className='prices__buy__button' onClick={openModal}>
                Заказать
              </div>
            </div>
          </div>
          <div className='center'>
            <div className='button__all__prices'>Скачать полный прайс</div>
          </div>
        </div>
      </section>

      <section className='reviews__section' name='reviews'>
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

      <section className='more__information__section'>
        <div className='wrapper'>
          <div className='more__information'>
            <div className='more__information__section__main__title'>
              На рынке более года. За это короткое время у нас...
            </div>
            <div className='more__information__items'>
              <div className='more__information__item'>
                <div className='miitem__top'>более</div>
                <div className='miitem__center'>12</div>
                <div className='miitem__bot'>тонн реализованного бетона</div>
              </div>
              <div className='more__information__item'>
                <div className='miitem__top'>более</div>
                <div className='miitem__center'>345</div>
                <div className='miitem__bot'>удовлетворенных клиентов</div>
              </div>
              <div className='more__information__item'>
                <div className='miitem__top'>более</div>
                <div className='miitem__center'>67</div>
                <div className='miitem__bot'>надежных партнеров</div>
              </div>
            </div>
            <div className='more__information__section__main__title'>
              Риски приобретения некачественного бетона
            </div>

            <div className='more__information__section__main__text'>
              Выбор некачественного бетона может привести к разрушению вашего
              дома. Недобросовестные производители занижают стоимость, нарушая
              технологию производства - во вред качеству:
              <div className='more__information__section__ul'>
                <ul>
                  <li>Использование отсева, вместо щебня.</li>
                  <li>Использование марки цемента меньшей прочности.</li>
                  <li>Ручная дозация компонентов для бетона.</li>
                  <li>Экономия на сырье для бетонной смеси.</li>
                  <li>
                    Перемешивание смеси в миксере вместо бетоносместителя.
                  </li>
                </ul>
              </div>
              <div className='more__information__bottom__text'>
                Если бетон предлагается по цене ниже рыночной, стоит обратить
                внимание на подобные моменты.{' '}
                <span className='underline__bold'>
                  Обращяясь к нам вы можете быть спокойны, тем не менее мы
                  ответим на все ваши вопросы, проконсультируем и предоставим
                  все документы гарантирующие качество продукта.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='contact__us__section'>
        <div className='wrapper'>
          <div className='form__title'>Мы Вас проконсультируем</div>
          <div className='form__text'>
            Заполните форму чтобы заказать обратный звонок. Наши сотрудники
            свяжутся с Вами и проконсультируют.
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className='inputs'>
              <input
                type='name'
                className='input name'
                placeholder='Ваше имя'
                name='user__name'
              />
              <input
                type='phone'
                className='input phone'
                placeholder='+7(___)-___-__-__'
                name='user__phone'
              />
            </div>
            <input
              type='submit'
              className='button__form'
              value='Заказать обратный звонок'
            />
          </form>
        </div>
      </section>

      <section className='faq'>
        <div className='reviews__main__title'>
          Ответы на часто задаваемые вопросы
        </div>
        <div className='wrapper'>
          <div className='accordion'>
            {data.map((item, index) => {
              if (isActive[index] === true) {
                return (
                  <div className='accordion-item'>
                    <div
                      className='accordion-title'
                      onClick={() => {
                        setIsActive(
                          isActive.map((item, i) => {
                            if (i === index) {
                              return !item;
                            } else {
                              return item;
                            }
                          })
                        );
                      }}
                    >
                      <div className='plus'>-</div>
                      <div>{item.title}</div>
                    </div>
                    <div className='accordion-content'>{item.text}</div>
                  </div>
                );
              } else {
                return (
                  <div className='accordion-item'>
                    <div
                      className='accordion-title'
                      onClick={() => {
                        setIsActive(
                          isActive.map((item, i) => {
                            if (i === index) {
                              return !item;
                            } else {
                              return item;
                            }
                          })
                        );
                      }}
                    >
                      <div className='plus'>+</div>
                      <div>{item.title} </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>

      <section className='certificates__section'>
        <div className='reviews__main__title'>
          Ответы на часто задаваемые вопросы
        </div>
        <div className='wrapper'>
          <div className='certificates'>
            <div className='certificates__item'>
              <img src={cert1} alt='' className='imgcert' />
            </div>
            <div className='certificates__item'>
              <img src={cert2} alt='' className='imgcert' />
            </div>
            <div className='certificates__item'>
              <img src={cert3} alt='' className='imgcert' />
            </div>
          </div>
        </div>
      </section>

      <section className='our__team__section'>
        <div className='reviews__main__title'>Команда Fida</div>
        <div className='reviews__main__subtitle'>Команда Fida</div>
        <div className='wrapper'>
          <div className='people'>
            <div className='person'>
              <div className='person__img'>
                <img src={person1} alt='' className='imgcert' />
              </div>
              <div className='person__name'>Иванов Иван Иванович</div>
              <div className='person__position'>Директор</div>
            </div>

            <div className='person'>
              <div className='person__img'>
                <img src={person2} alt='' className='imgcert' />
              </div>
              <div className='person__name'>Иванов Иван Иванович</div>
              <div className='person__position'>Директор</div>
            </div>

            <div className='person'>
              <div className='person__img'>
                <img src={person3} alt='' className='imgcert' />
              </div>
              <div className='person__name'>Иванов Иван Иванович</div>
              <div className='person__position'>Директор</div>
            </div>
          </div>
        </div>

        <div className='partners__main__title'>Наши партнеры</div>
        <div className='wrapper'>
          <div className='brands'>
            <div className='brand'>
              <img src={brand1} alt='' className='brand__img' />
            </div>
            <div className='brand'>
              <img src={brand2} alt='' className='brand__img' />
            </div>
            <div className='brand'>
              <img src={brand3} alt='' className='brand__img' />
            </div>
            <div className='brand'>
              <img src={brand4} alt='' className='brand__img' />
            </div>
            <div className='brand'>
              <img src={brand5} alt='' className='brand__img' />
            </div>
          </div>
        </div>
      </section>

      <section className='adress__section'>
        <div className='wrapper'>
          <div className='address'>
            <div className='address__left'>
              <div className='address__left__title'>Контакты</div>

              <div className='address__contact' href='mailto:concrete@fida.kz'>
                <div className='contact__icon'>
                  <svg
                    width='20'
                    height='15'
                    viewBox='0 0 20 15'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M0 1.7412V1.23457C0 0.90714 0.131696 0.593123 0.366117 0.361597C0.600537 0.13007 0.918479 0 1.25 0L18.75 0C19.0815 0 19.3995 0.13007 19.6339 0.361597C19.8683 0.593123 20 0.90714 20 1.23457V1.7412L10 7.91404L0 1.7412ZM10.3313 9.16559C10.2319 9.22683 10.1171 9.2593 10 9.2593C9.88288 9.2593 9.76811 9.22683 9.66875 9.16559L0 3.19707V13.5802C0 13.9077 0.131696 14.2217 0.366117 14.4532C0.600537 14.6847 0.918479 14.8148 1.25 14.8148H18.75C19.0815 14.8148 19.3995 14.6847 19.6339 14.4532C19.8683 14.2217 20 13.9077 20 13.5802V3.19707L10.3313 9.16559Z'
                      fill='#141F38'
                    />
                  </svg>
                </div>
                <p className='email__link'>E-mail: concrete@fida.kz</p>
              </div>

              <div className='address__contact' href='mailto:concrete@fida.kz'>
                <div className='contact__icon'>
                  <svg
                    width='21'
                    height='20'
                    viewBox='0 0 21 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M10.0015 20C15.5253 20 20.003 15.523 20.003 10C20.003 4.477 15.5253 0 10.0015 0C4.47767 0 0 4.477 0 10C0 15.523 4.47767 20 10.0015 20ZM13.234 11.361L14.7782 12.909C15.0852 13.218 15.0752 13.729 14.7582 14.049L14.3161 14.481L14.3061 14.472C13.9357 14.7563 13.4956 14.9359 13.0319 14.992C12.9319 15.003 10.5966 15.222 7.69814 12.318C5.60083 10.217 4.82772 8.668 5.03275 6.974C5.05575 6.762 5.10776 6.552 5.19277 6.331C5.28278 6.099 5.4048 5.883 5.55082 5.697L5.53882 5.685L5.97389 5.246C6.29293 4.926 6.80301 4.917 7.10906 5.225L8.65429 6.773C8.96133 7.081 8.95233 7.591 8.63428 7.911L8.37624 8.168L7.85417 8.691C7.88258 8.74077 7.91059 8.79077 7.93818 8.841L7.93918 8.844C8.21222 9.337 8.58628 10.011 9.29438 10.72C10.0025 11.43 10.6746 11.804 11.1667 12.077L11.3197 12.163L12.0978 11.383C12.4168 11.063 12.9259 11.054 13.234 11.362V11.361Z'
                      fill='#141F38'
                    />
                  </svg>
                </div>
                <p className='email__link'>
                  Номер телефона : 8 (778) 342-09-44
                </p>
              </div>

              <div className='address__contact' href='mailto:concrete@fida.kz'>
                <div className='contact__icon'>
                  <svg
                    width='15'
                    height='21'
                    viewBox='0 0 15 21'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M7.49967 0C3.36431 0 0 3.25965 0 7.26589C0 11.1222 6.80458 20.1321 7.09432 20.5136L7.36472 20.8701C7.39634 20.912 7.4467 20.9365 7.49967 20.9365C7.55347 20.9365 7.6035 20.912 7.63545 20.8701L7.90568 20.5136C8.19558 20.1321 15 11.1222 15 7.26589C15 3.25965 11.6351 0 7.49967 0ZM7.49967 4.66326C8.98139 4.66326 10.1863 5.83053 10.1863 7.26589C10.1863 8.70051 8.98133 9.86852 7.49967 9.86852C6.01883 9.86852 4.81309 8.70051 4.81309 7.26589C4.81309 5.83053 6.01878 4.66326 7.49967 4.66326Z'
                      fill='#141F38'
                    />
                  </svg>
                </div>
                <p className='email__link'>
                  Адрес: г. Астана, район Байконыр, ул. Ш. Жиенкуловой, 22/2
                </p>
              </div>
              <div className='button__all__prices call'>
                Скачать полный прайс
              </div>
            </div>
            <div className='address__right'>
              <iframe
                className='map__frame'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1768.528049143455!2d71.44549539307879!3d51.18081564566472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424580dc212c825b%3A0xc712fdb2a0c816a1!2z0YPQuy4g0KjQsNGA0LAg0JbQuNC10L3QutGD0LvQvtCy0L7QuSAyMiwg0JDRgdGC0LDQvdCwIDAxMDAwMA!5e0!3m2!1sru!2skz!4v1666462469725!5m2!1sru!2skz'
                width='600'
                height='450'
                allowfullscreen=''
                loading='lazy'
                referrerpolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <footer className='footer__section'>
        <div className='wrapper'>
          <div className='footer'>
            <div className='footer__left'>
              <div className='footer__logo__left'>
                <img src={logo} alt='logo' className='logoImg' />
              </div>
              <div className='footer__left__text'>
                <div className='left__text__bold'>
                  © 2022 FIDA Concrete. Все права защищены.
                </div>
                <div className='footer__left__text__sub'>
                  «Fida» является зарегистрированным товарным знаком, любое
                  использование без письменного разрешения правообладателя
                  запрещено.
                </div>
              </div>
            </div>
            <div className='footer__right'>
              <div className='footer__links'>
                <div className='footer__link'>
                  <a href='#'>О производстве</a>
                </div>
                <div className='footer__link'>
                  <a href='#'>Продукция</a>
                </div>
                <div className='footer__link'>
                  <a href='#'>Преимущества</a>
                </div>
                <div className='footer__link'>
                  <a href='#'>Контакты</a>
                </div>
              </div>

              <div className='contact' id='contacts'>
                <div className='footer__right__title'>Контакты</div>
                <div className='footer__contact'>
                  <div className='contact__icon'>
                    <svg
                      width='20'
                      height='15'
                      viewBox='0 0 20 15'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M0 1.7412V1.23457C0 0.90714 0.131696 0.593123 0.366117 0.361597C0.600537 0.13007 0.918479 0 1.25 0L18.75 0C19.0815 0 19.3995 0.13007 19.6339 0.361597C19.8683 0.593123 20 0.90714 20 1.23457V1.7412L10 7.91404L0 1.7412ZM10.3313 9.16559C10.2319 9.22683 10.1171 9.2593 10 9.2593C9.88288 9.2593 9.76811 9.22683 9.66875 9.16559L0 3.19707V13.5802C0 13.9077 0.131696 14.2217 0.366117 14.4532C0.600537 14.6847 0.918479 14.8148 1.25 14.8148H18.75C19.0815 14.8148 19.3995 14.6847 19.6339 14.4532C19.8683 14.2217 20 13.9077 20 13.5802V3.19707L10.3313 9.16559Z'
                        fill='white'
                      />
                    </svg>
                  </div>
                  <p className='email__link'>E-mail: concrete@fida.kz</p>
                </div>

                <div
                  className='address__contact'
                  href='mailto:concrete@fida.kz'
                >
                  <div className='contact__icon'>
                    <svg
                      width='21'
                      height='20'
                      viewBox='0 0 21 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M10.0015 20C15.5253 20 20.003 15.523 20.003 10C20.003 4.477 15.5253 0 10.0015 0C4.47767 0 0 4.477 0 10C0 15.523 4.47767 20 10.0015 20ZM13.234 11.361L14.7782 12.909C15.0852 13.218 15.0752 13.729 14.7582 14.049L14.3161 14.481L14.3061 14.472C13.9357 14.7563 13.4956 14.9359 13.0319 14.992C12.9319 15.003 10.5966 15.222 7.69814 12.318C5.60083 10.217 4.82772 8.668 5.03275 6.974C5.05575 6.762 5.10776 6.552 5.19277 6.331C5.28278 6.099 5.4048 5.883 5.55082 5.697L5.53882 5.685L5.97389 5.246C6.29293 4.926 6.80301 4.917 7.10906 5.225L8.65429 6.773C8.96133 7.081 8.95233 7.591 8.63428 7.911L8.37624 8.168L7.85417 8.691C7.88258 8.74077 7.91059 8.79077 7.93818 8.841L7.93918 8.844C8.21222 9.337 8.58628 10.011 9.29438 10.72C10.0025 11.43 10.6746 11.804 11.1667 12.077L11.3197 12.163L12.0978 11.383C12.4168 11.063 12.9259 11.054 13.234 11.362V11.361Z'
                        fill='white'
                      />
                    </svg>
                  </div>
                  <p className='email__link'>
                    Номер телефона : 8 (778) 342-09-44
                  </p>
                </div>

                <div
                  className='address__contact'
                  href='mailto:concrete@fida.kz'
                >
                  <div className='contact__icon'>
                    <svg
                      width='15'
                      height='21'
                      viewBox='0 0 15 21'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M7.49967 0C3.36431 0 0 3.25965 0 7.26589C0 11.1222 6.80458 20.1321 7.09432 20.5136L7.36472 20.8701C7.39634 20.912 7.4467 20.9365 7.49967 20.9365C7.55347 20.9365 7.6035 20.912 7.63545 20.8701L7.90568 20.5136C8.19558 20.1321 15 11.1222 15 7.26589C15 3.25965 11.6351 0 7.49967 0ZM7.49967 4.66326C8.98139 4.66326 10.1863 5.83053 10.1863 7.26589C10.1863 8.70051 8.98133 9.86852 7.49967 9.86852C6.01883 9.86852 4.81309 8.70051 4.81309 7.26589C4.81309 5.83053 6.01878 4.66326 7.49967 4.66326Z'
                        fill='white'
                      />
                    </svg>
                  </div>
                  <p className='email__link'>
                    Адрес: г. Астана, район Байконыр, ул. Ш. Жиенкуловой, 22/2
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
