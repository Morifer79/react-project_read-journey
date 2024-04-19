import { BtnDel, FlexWrapper, LeftSide, RightSide, VerticalLine } from './DiaryItem.styled';
import { removeReading } from '../../../../../../redux/books/booksOperations';
import { useDispatch } from 'react-redux';
import { useBooks } from '../../../../../../hooks/useBooks';
import SpriteIcons from '../../../../../../images/sprite.svg';

export const DiaryItem = ({ info }) => {
  const dispatch = useDispatch();
  const {readBook} = useBooks();

  const { startReading, finishReading, startPage, finishPage, speed, _id } = info;
  const { totalPages, timeLeftToRead } = readBook;

  const convertDate = timeData => {
    const date = new Date(timeData);
    const D = date.getDate();
    const M = (date.getMonth() + 1).toString().padStart(2, '0');
    const Y = date.getFullYear();
    return `${D}.${M}.${Y}`;
  };

  const startDate = startReading;
  const finishDate = finishReading;
  const startConvertDate = convertDate(startDate);
  const finishConvertDate = convertDate(finishDate);
  const percentage = ((finishPage / totalPages) * 100).toFixed(2);
  const page = finishPage - startPage;
  const bookId = readBook._id;

  const deleteProgressPoint = _id => {
    dispatch(removeReading({ bookId, readingId:_id }));
  };

  return (
    <FlexWrapper>
      <LeftSide>
        <svg>
          <use xlinkHref={`${SpriteIcons}#icon-diary-dot`} />
        </svg>
        <VerticalLine />
        <div>
          <h4>{finishConvertDate ? finishConvertDate : startConvertDate}</h4>
          <h5>{percentage} %</h5>
          <h6>{timeLeftToRead.minutes} minutes</h6>
        </div>
      </LeftSide>
      <RightSide>
        <div>
          <h4>{page} pages</h4>
          <svg>
            <use xlinkHref={`${SpriteIcons}#icon-diagram`} />
          </svg>
          <h5>{speed} pages per hour</h5>
        </div>
        <BtnDel onClick={() => deleteProgressPoint(_id)}>
          <svg>
            <use xlinkHref={`${SpriteIcons}#icon-trash`} />
          </svg>
        </BtnDel>
      </RightSide>
    </FlexWrapper>
  );
};
