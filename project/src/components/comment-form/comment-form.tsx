import {ChangeEvent, useState, useEffect} from 'react';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const';

const ratingNumbers = [5, 4, 3, 2, 1];

function CommentForm():JSX.Element {
  const {authorizationStatus} = useAppSelector((state) => state);
  const [formData, setFormData] = useState({
    review: '',
    rating: undefined as number | undefined,
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  useEffect(() => {
    setIsButtonDisabled(!(formData.review.length >= 50 && formData.rating));
  }, [formData]);

  const formChangeHandle = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <form className='reviews__form form' action='#' method='post'>
        <label className='reviews__label form__label' htmlFor='review'>
          Your review
        </label>
        <div className='reviews__rating-form form__rating'>
          {
            ratingNumbers.map((number) => (
              <>
                <input
                  className='form__rating-input visually-hidden'
                  name='rating'
                  defaultValue={number}
                  id={`${number}-stars`}
                  type='radio'
                />
                <label
                  onClick={() => setFormData({...formData, rating: number})}
                  htmlFor={`${number}-stars`}
                  className='reviews__rating-label form__rating-label'
                  title='good'
                >
                  <svg className='form__star-image' width={37} height={33}>
                    <use xlinkHref='#icon-star' />
                  </svg>
                </label>
              </>
            ))
          }
        </div>
        <textarea
          onChange={formChangeHandle}
          className='reviews__textarea form__textarea'
          id='review'
          name='review'
          placeholder='Tell how was your stay, what you like and what can be improved'
          defaultValue={''}
        />
        <div className='reviews__button-wrapper'>
          <p className='reviews__help'>
            To submit review please make sure to set{' '}
            <span className='reviews__star'>rating</span> and describe your stay with
            at least <b className='reviews__text-amount'>50 characters</b>.
          </p>
          <button
            className='reviews__submit form__submit button'
            type='submit'
            disabled={isButtonDisabled}
          >
            Submit
          </button>
        </div>
      </form>
    );
  } else {
    return (<div></div>);
  }
}

export default CommentForm;
