import {useAppDispatch} from '../../hooks';
import {changeCity} from '../../store/action';

function Tabs():JSX.Element {
  const dispatch = useAppDispatch();
  // const console = (evt) => {evt.target}

  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul onClick={(evt) => console.log(evt.target.localName === 'span' ? dispatch(changeCity({city: evt.target.textContent})) : undefined)} className='locations__list tabs__list'>
          <li className='locations__item'>
            <a className='locations__item-link tabs__item' href='#xxx'>
              <span>Paris</span>
            </a>
          </li>
          <li className='locations__item'>
            <a className='locations__item-link tabs__item' href='#xxx'>
              <span>Cologne</span>
            </a>
          </li>
          <li className='locations__item'>
            <a className='locations__item-link tabs__item' href='#xxx'>
              <span>Brussels</span>
            </a>
          </li>
          <li className='locations__item'>
            <a className='locations__item-link tabs__item tabs__item--active' href='#xxx'>
              <span>Amsterdam</span>
            </a>
          </li>
          <li className='locations__item'>
            <a className='locations__item-link tabs__item' href='#xxx'>
              <span>Hamburg</span>
            </a>
          </li>
          <li className='locations__item'>
            <a href='#xxx' className='locations__item-link tabs__item'>
              <span>Dusseldorf</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
