import {
  ProgressClr,
  Quotation,
  StatisticsBody,
  Wrapper,
} from './StatisticsBlock.styled';
import ring from '../../../../../images/progress-ring.png';

export const StatisticsBlock = () => {
  return (
    <>
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
