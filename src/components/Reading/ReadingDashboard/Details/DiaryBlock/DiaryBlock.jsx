import { DiaryBody } from './DiaryBlock.styled';
import { DiaryItem } from './DiaryItem/DiaryItem';
import { useBooks } from '../../../../../hooks/useBooks';

export const DiaryBlock = () => {
  const { readBook } = useBooks();

  return (
    <>
      {readBook.timeLeftToRead && (
        <DiaryBody>
          <ul>
            {readBook.progress
              .slice()
              .reverse()
              .map(item => (
                <li key={item._id}>
                  <DiaryItem info={item} />
                </li>
              ))}
          </ul>
        </DiaryBody>
      )}
    </>
  );
};
