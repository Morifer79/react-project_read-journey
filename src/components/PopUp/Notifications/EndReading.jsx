import books from '../../../images/books.png';
import { ModalBody } from '../Notifications/Notifications.styled';

export const EndReading = () => {
  return (
    <ModalBody>
      <img src={books} alt="finger" />
      <h4>The book is read</h4>
      <h5>
        It was an <span>exciting journey</span>, where each page revealed new horizons, and
        the characters became inseparable friends.
      </h5>
    </ModalBody>
  );
};
