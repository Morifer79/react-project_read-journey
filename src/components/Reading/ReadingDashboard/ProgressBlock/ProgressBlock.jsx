import { Progress } from "./ProgressBlock.styled";
import star from '../../../../images/star.png';

export const ProgressBlock = () => {
  return (
    <Progress>
      <h3>Progress</h3>
      <p>
        Here you will see when and how much you have read. To make an entry,
        enter the start page number at the top and click on the 'To start'
        button .
      </p>
      <img src={star} alt="star" />
    </Progress>
  );
};
