import { Mainboard } from 'components/Constructor/Mainboard/Mainboard';
import { BtnStartStop, ImageBox } from './ReadingMainboard.styled';
import { useBooks } from '../../../hooks/useBooks';
import SpriteIcons from '../../../images/sprite.svg';
import noImg from '../../../images/no-image.png';

export const ReadingMainboard = () => {
  const { readBook } = useBooks();
  const { imageUrl, title, author, timeLeftToRead, status } = readBook;

  return (
    <Mainboard>
      <h3>My reading</h3>
      <ImageBox>
        <img src={imageUrl ? imageUrl : noImg} alt="book" />
        <div>
          <div>
            <h4>{title}</h4>
            <h5>{author}</h5>
          </div>
          <BtnStartStop>
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
