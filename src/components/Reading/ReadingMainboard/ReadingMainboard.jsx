import { Mainboard } from 'components/Constructor/Mainboard/Mainboard';
import { BtnStartStop, ImageBox, InfoBlock } from './ReadingMainboard.styled';
import { selectReadBook } from '../../../redux/books/booksSelectors';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import SpriteIcons from '../../../images/sprite.svg';
import noImg from '../../../images/no-image.png';

export const ReadingMainboard = () => {
  const [show, setShow] = useState(false);
  const books = useSelector(selectReadBook);
  const { imageUrl, title, author, timeLeftToRead, status } = books;

  const toggleTime = () => {
    return timeLeftToRead.hours !== 'undefined' ? setShow(!show) : null;
  };

  return (
    <Mainboard>
      <h3>My reading</h3>
      {show && (
        <InfoBlock>
          <p>Time Left:</p>
          <h5>
            <span>{timeLeftToRead.hours}</span> hours
          </h5>
          <h5>
            <span>{timeLeftToRead.minutes}</span> minutes
          </h5>
          <h5>
            <span>{timeLeftToRead.seconds}</span> seconds
          </h5>
        </InfoBlock>
      )}
      <ImageBox>
        <img src={imageUrl ? imageUrl : noImg} alt="book" />
        <div>
          <div>
            <h4>{title}</h4>
            <h5>{author}</h5>
          </div>
          <BtnStartStop onClick={toggleTime}>
            {!timeLeftToRead && status !== 'unread' ? (
              <svg>
                <use xlinkHref={`${SpriteIcons}#icon-stop`} />
              </svg>
            ) : (
              <svg>
                <use xlinkHref={`${SpriteIcons}#icon-start`} />
              </svg>
            )}
          </BtnStartStop>
        </div>
      </ImageBox>
    </Mainboard>
  );
};
