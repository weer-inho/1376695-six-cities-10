import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCity} from '../../store/action';
import {cities} from '../../mocks/mock-data';

function Tabs():JSX.Element {
  const {mainCity} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {
            cities.map((item) => (
              <li onClick={() => dispatch(changeCity(item))} key={item.name} className='locations__item'>
                <a className={`locations__item-link tabs__item ${mainCity.name === item.name ? 'tabs__item--active' : undefined}`} href='#xxx'>
                  <span>{item.name}</span>
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
