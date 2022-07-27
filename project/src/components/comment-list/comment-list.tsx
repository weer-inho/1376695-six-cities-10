import {reviewType} from '../../types/types';

type CommentListProps = {
  reviews: reviewType[] | undefined;
}

function CommentList({reviews}:CommentListProps):JSX.Element {
  // eslint-disable-next-line no-console
  console.log(reviews);

  return (
    <ul className='reviews__list'>
      {
        reviews?.map((review) => (
          <li key={`${review?.name}-${review?.date}`} className='reviews__item'>
            <div className='reviews__user user'>
              <div className='reviews__avatar-wrapper user__avatar-wrapper'>
                <img
                  className='reviews__avatar user__avatar'
                  src={review?.avatar}
                  width={54}
                  height={54}
                  alt='Reviews avatar'
                />
              </div>
              <span className='reviews__user-name'>{review?.name}</span>
            </div>
            <div className='reviews__info'>
              <div className='reviews__rating rating'>
                <div className='reviews__stars rating__stars'>
                  <span style={{ width: '80%' }} />
                  <span className='visually-hidden'>Rating</span>
                </div>
              </div>
              <p className='reviews__text'>
                {review?.reviewText}
              </p>
              <time className='reviews__time' dateTime='2019-04-24'>
                April 2019
              </time>
            </div>
          </li>
        ))
      }
    </ul>
  );
}

export default CommentList;
