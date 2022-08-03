import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCity} from '../../store/action';
import {MouseEventHandler} from 'react';

function Tabs():JSX.Element {
  const {city} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  // const console = (evt) => {evt.target}

  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul onClick={(evt) => evt.target.localName === 'span' ? dispatch(changeCity({city: evt.target.textContent})) : undefined} className='locations__list tabs__list'>
          <li className='locations__item'>
            <a className={`locations__item-link tabs__item ${city === 'Paris' ? 'tabs__item--active' : undefined}`} href='#xxx'>
              <span>Paris</span>
            </a>
          </li>
          <li className='locations__item'>
            <a className={`locations__item-link tabs__item ${city === 'Cologne' ? 'tabs__item--active' : undefined}`} href='#xxx'>
              <span>Cologne</span>
            </a>
          </li>
          <li className='locations__item'>
            <a className={`locations__item-link tabs__item ${city === 'Brussels' ? 'tabs__item--active' : undefined}`} href='#xxx'>
              <span>Brussels</span>
            </a>
          </li>
          <li className='locations__item'>
            <a className={`locations__item-link tabs__item ${city === 'Amsterdam' ? 'tabs__item--active' : undefined}`} href='#xxx'>
              <span>Amsterdam</span>
            </a>
          </li>
          <li className='locations__item'>
            <a className={`locations__item-link tabs__item ${city === 'Hamburg' ? 'tabs__item--active' : undefined}`} href='#xxx'>
              <span>Hamburg</span>
            </a>
          </li>
          <li className='locations__item'>
            <a className={`locations__item-link tabs__item ${city === 'Dusseldorf' ? 'tabs__item--active' : undefined}`} href='#xxx'>
              <span>Dusseldorf</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
