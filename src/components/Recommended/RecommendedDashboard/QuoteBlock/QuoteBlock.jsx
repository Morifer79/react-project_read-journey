import { Quote } from './QuoteBlock.styled';
import colBooks from '../../../../images/books.png';

export const QuoteBlock = () => {
  return (
    <Quote>
      <img src={colBooks} alt="books" />
      <p>
        &quot;Books are <span>windows</span> to the world, and reading is a
        journey into the unknown.&quot;
      </p>
    </Quote>
  );
};
