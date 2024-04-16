import {
  BtnBox,
  BtnDetails,
  FlexWrapper,
} from '../DiaryBlock/DiaryBlock.styled';
import {
  ProgressClr,
  Quotation,
  StatisticsBody,
  Wrapper,
} from './StatisticsBlock.styled';
import SpriteIcons from '../../../../../images/sprite.svg';
import ring from '../../../../../images/progress-ring.png';

export const StatisticsBlock = () => {
  return (
    <>
      <FlexWrapper>
        <h3>Statistics</h3>
        <BtnBox>
          <BtnDetails>
            <svg stroke="#686868">
              <use xlinkHref={`${SpriteIcons}#icon-hourglass`} />
            </svg>
          </BtnDetails>
          <BtnDetails>
            <svg stroke="#F9F9F9">
              <use xlinkHref={`${SpriteIcons}#icon-pie-chart`} />
            </svg>
          </BtnDetails>
        </BtnBox>
      </FlexWrapper>
      <Quotation>
        Each page, each chapter is a new round of knowledge, a new step towards
        understanding. By rewriting statistics, we create our own reading
        history.
      </Quotation>
      <StatisticsBody>
        <img src={ring} alt="progress" />
        <span>100%</span>
        <Wrapper>
          <ProgressClr />
          <div>
            <h4>19.14%</h4>
            <h5>171 pages read</h5>
          </div>
        </Wrapper>
      </StatisticsBody>
    </>
  );
};
