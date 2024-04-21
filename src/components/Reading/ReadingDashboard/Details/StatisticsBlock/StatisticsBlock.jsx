import { Circle } from 'rc-progress';
import { useBooks } from '../../../../../hooks/useBooks';
import {
  CircleWrapper,
  ProgressClr,
  Quotation,
  StatisticsBody,
  Wrapper,
} from './StatisticsBlock.styled';

export const StatisticsBlock = () => {
  const { readBook } = useBooks();
  const { progress, totalPages } = readBook;

  const finishPageArr = progress.map(item => item.finishPage);
  const finishPage = finishPageArr.slice(-1);
  const percentage = ((finishPage / totalPages) * 100).toFixed(2);
  
  return (
    <>
      <Quotation>
        Each page, each chapter is a new round of knowledge, a new step towards
        understanding. By rewriting statistics, we create our own reading
        history.
      </Quotation>
      <StatisticsBody>
        <CircleWrapper>
          <Circle
            percent={percentage}
            strokeWidth={8}
            trailWidth={8}
            strokeColor="#30B94D"
            trailColor="#1F1F1F"
          />
        </CircleWrapper>
        <span>100%</span>
        <Wrapper>
          <ProgressClr />
          <div>
            <h4>{percentage} %</h4>
            <h5>{finishPage} pages read</h5>
          </div>
        </Wrapper>
      </StatisticsBody>
    </>
  );
};
