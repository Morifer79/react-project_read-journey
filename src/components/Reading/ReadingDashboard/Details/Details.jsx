import { DiaryBlock } from './DiaryBlock/DiaryBlock';
import { StatisticsBlock } from './StatisticsBlock/StatisticsBlock';
import {
  BtnBox,
  BtnDetails,
  FlexWrapper,
} from './DiaryBlock/DiaryBlock.styled';
import SpriteIcons from '../../../../images/sprite.svg';
import { useState } from 'react';
import { useBooks } from '../../../../hooks/useBooks';

export const Details = () => {
  const [show, setShow] = useState(true);
  const { readBook } = useBooks();
  console.log(readBook);
  

  const diaryClick = () => {
    setShow(true);
  };

  const detailsClick = () => {
    setShow(false);
  };

  return (
    <div>
      <FlexWrapper>
        <h3>{show ? 'Diary' : 'Statistics'}</h3>
        <BtnBox>
          <BtnDetails onClick={diaryClick}>
            <svg stroke={show ? '#F9F9F9' : '#686868'}>
              <use xlinkHref={`${SpriteIcons}#icon-hourglass`} />
            </svg>
          </BtnDetails>
          <BtnDetails onClick={detailsClick}>
            <svg stroke={!show ? '#F9F9F9' : '#686868'}>
              <use xlinkHref={`${SpriteIcons}#icon-pie-chart`} />
            </svg>
          </BtnDetails>
        </BtnBox>
      </FlexWrapper>
      {show ? <DiaryBlock /> : <StatisticsBlock />}
    </div>
  );
};
