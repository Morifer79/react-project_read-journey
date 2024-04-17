import {
  DiaryBody,
  VerticalLine,
} from './DiaryBlock.styled';
import { useSelector } from 'react-redux';
import { selectReadBook } from '../../../../../redux/books/booksSelectors';
import { DiaryItem } from './DiaryItem/DiaryItem';

export const DiaryBlock = () => {
  const bookInfo = useSelector(selectReadBook);

  return (
    <>
      {bookInfo.timeLeftToRead && (
        <DiaryBody>
          <VerticalLine />
          <ul>
            {bookInfo.progress.slice().reverse().map(item => (
              <li key={item._id}>
                <DiaryItem info={item} />
              </li>
            ))}
          </ul>
        </DiaryBody>
      )}
    </>
  );
};
