import {reviewType} from '../../types/types';
import CommentItem from '../comment-item/comment-item';

type CommentListProps = {
  reviews: reviewType[] | undefined;
}

function CommentList({reviews}: CommentListProps): JSX.Element {
  return (
    <ul className='reviews__list'>
      {
        reviews?.map((review) => (
          <CommentItem review={review} key={`${review?.name}-${review?.date}`}/>
        ))
      }
    </ul>
  );
}

export default CommentList;
