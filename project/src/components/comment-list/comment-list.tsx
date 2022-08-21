import CommentItem from '../comment-item/comment-item';
import {useAppSelector} from "../../hooks";

function CommentList(): JSX.Element {
  const {lastComments} = useAppSelector((state) => state);

  return (
    <>
      <h2 className='reviews__title'>
        Reviews · <span className='reviews__amount'>{lastComments?.length}</span>
      </h2>
      <ul className='reviews__list'>
        {
          lastComments?.map((review) => (
            <CommentItem review={review} key={`${review?.id}-${review?.date}`}/>
          ))
        }
      </ul>
    </>
  );
}

export default CommentList;
