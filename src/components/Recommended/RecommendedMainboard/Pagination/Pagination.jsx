import { BtnWrapper } from 'components/Recommended/RecommendedDashboard/FilterBlock/FilterBlock.styled';
import { BtnSlider } from './Pagination.styled';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAll } from '../../../../redux/books/booksOperations';
import SpriteIcons from '../../../../images/sprite.svg';
import { useBooks } from '../../../../hooks/useBooks';

export const Pagination = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const dispatch = useDispatch();
  const { totalPage } = useBooks();

  const toBack = () => (page === 1 ? undefined : setPage(page - 1));
  const toForward = () => (page === totalPage ? undefined : setPage(page + 1));

  useEffect(() => {
    dispatch(getAll({ page, limit }));
  }, [dispatch, page, limit]);

  return (
    <BtnWrapper>
      <h3>Recommended</h3>
      <div>
        <BtnSlider
          type="button"
          onClick={toBack}
          style={{ stroke: page === 1 ? '#686868' : '#fff' }}
        >
          <svg>
            <use xlinkHref={`${SpriteIcons}#icon-chevron-left`} />
          </svg>
        </BtnSlider>
        <BtnSlider
          type="button"
          onClick={toForward}
          style={{ stroke: page === totalPage ? '#686868' : '#fff' }}
        >
          <svg>
            <use xlinkHref={`${SpriteIcons}#icon-chevron-right`} />
          </svg>
        </BtnSlider>
      </div>
    </BtnWrapper>
  );
};
