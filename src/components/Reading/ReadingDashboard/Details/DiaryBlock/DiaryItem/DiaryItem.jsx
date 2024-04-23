import {
  BtnDel,
  Container,
  FlexWrapper,
  LeftSide,
  RightSide,
  VerticalLine,
} from './DiaryItem.styled';
import { removeReading } from '../../../../../../redux/books/booksOperations';
import { useDispatch } from 'react-redux';
import { useBooks } from '../../../../../../hooks/useBooks';
import { PropagateLoader } from 'react-spinners';
import SpriteIcons from '../../../../../../images/sprite.svg';
import toast from 'react-hot-toast';

export const DiaryItem = ({ info }) => {
  const dispatch = useDispatch();
  const { readBook } = useBooks();
  const { startReading, startPage, finishPage, _id, status } = info;
  const { totalPages, timeLeftToRead } = readBook;

  const convertDate = timeData => {
    const date = new Date(timeData);
    const D = date.getDate();
    const M = (date.getMonth() + 1).toString().padStart(2, '0');
    const Y = date.getFullYear();
    return `${D}.${M}.${Y}`;
  };

  const startConvertDate = convertDate(startReading);
  const page = finishPage - startPage;
  const averagePercentage = ((page / totalPages) * 100).toFixed(2);
  const bookId = readBook._id;

  const deleteProgressPoint = _id => {
    dispatch(removeReading({ bookId, readingId: _id }));
    toast.success('The progress has been deleted');
  };

  return (
    <FlexWrapper>
      {status === 'active' && (
        <Container>
          <PropagateLoader color="#30B94D" />
        </Container>
      )}
      {status === 'inactive' && (
        <>
          <LeftSide>
            <svg>
              <use xlinkHref={`${SpriteIcons}#icon-diary-dot`} />
            </svg>
            <VerticalLine />
            <div>
              <h4>{startConvertDate}</h4>
              <h5>{averagePercentage} %</h5>
              <h6>{timeLeftToRead?.minutes} minutes</h6>
            </div>
          </LeftSide>
          <RightSide>
            <div>
              <h4>{finishPage} pages</h4>
              <svg>
                <use xlinkHref={`${SpriteIcons}#icon-diagram`} />
              </svg>
              <h5>{page} pages per hour</h5>
            </div>
            <BtnDel onClick={() => deleteProgressPoint(_id)}>
              <svg>
                <use xlinkHref={`${SpriteIcons}#icon-trash`} />
              </svg>
            </BtnDel>
          </RightSide>
        </>
      )}
    </FlexWrapper>
  );
};
