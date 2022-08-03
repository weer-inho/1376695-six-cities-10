import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCity} from '../../store/action';
//import {MouseEventHandler} from 'react';

const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldord'];

function Tabs():JSX.Element {
  const {city} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  // const console = (evt) => {evt.target}

  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {
            cities.map((item) => (
              <li onClick={() => dispatch(changeCity(item))} key={item} className='locations__item'>
                <a className={`locations__item-link tabs__item ${city === item ? 'tabs__item--active' : undefined}`} href='#xxx'>
                  <span>{item}</span>
                </a>
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
