import finger from '../../../images/finger.png';
import { ModalBody } from './Notifications.styled';

export const AddToLibrary = () => {
  return (
    <ModalBody>
      <img src={finger} alt="finger" />
      <h4>Good job</h4>
      <h5>
        Your book is now in <span>the library!</span> The joy knows no bounds and now you can start your training
      </h5>
    </ModalBody>
  );
};
