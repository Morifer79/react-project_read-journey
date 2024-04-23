import { DiaryBody } from './DiaryBlock.styled';
import { DiaryItem } from './DiaryItem/DiaryItem';
import { useBooks } from '../../../../../hooks/useBooks';

export const DiaryBlock = () => {
  const { readBook } = useBooks();
  const { progress } = readBook;

  return (
    <DiaryBody>
      <ul>
        {progress
          ?.slice()
          .reverse()
          .map(item => {
            return (
              <li key={item._id}>
                <DiaryItem info={item} />
              </li>
            );
          })}
      </ul>
    </DiaryBody>
  );
};
