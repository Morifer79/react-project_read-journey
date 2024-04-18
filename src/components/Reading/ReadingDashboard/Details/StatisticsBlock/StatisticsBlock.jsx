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
  const { status, totalPages } = readBook;
  
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
            percent={15}
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
            {/* временное решение ❗ */}
            <h4>{status} %</h4>
            <h5>{totalPages} pages read</h5>
          </div>
        </Wrapper>
      </StatisticsBody>
    </>
  );
};
