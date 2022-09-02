import {useState} from 'react';
import {changeSort} from '../../store/action';
import {useAppDispatch} from '../../hooks';

const sortingOptions = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

function SortingForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const [sorting, setSorting] = useState('Popular');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <form onClick={() => setIsOpen(!isOpen)} className='places__sorting' action='#' method='get'>
      <span className='places__sorting-caption'>Sort by: </span>
      <span className='places__sorting-type' tabIndex={0}>
        {sorting}
        <svg className='places__sorting-arrow' width={7} height={4}>
          <use xlinkHref='#icon-arrow-select'/>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
        {
          sortingOptions.map((option) => (
            <li
              onClick={() => {
                setSorting(option);
                dispatch(changeSort(option));
              }}
              key={option}
              className={`places__option ${sorting === option ? 'places__option--active' : undefined}`}
            >
              {option}
            </li>
          ))
        }
      </ul>
    </form>
  );
}

export default SortingForm;
