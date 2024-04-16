import { useState } from 'react';
import { DiaryBlock } from './DiaryBlock/DiaryBlock';
import { StatisticsBlock } from './StatisticsBlock/StatisticsBlock';

export const Details = () => {
  const [isClick] = useState(false); // прокинуть сюда пропсом ❗ 
  return <>{isClick ? <StatisticsBlock /> : <DiaryBlock />}</>
};
