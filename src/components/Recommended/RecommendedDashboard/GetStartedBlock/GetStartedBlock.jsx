import { GetStarted, SignNumber, SignText, StyledLink } from "./GetStartedBlock.styled";
import SpriteIcons from '../../../../images/sprite.svg';

export const GetStartedBlock = () => {
  return (
    <GetStarted>
      <h3>Start your workout</h3>
      <ul>
        <li>
          <SignNumber>
            <span>1</span>
          </SignNumber>
          <SignText>
            Create a personal library:{' '}
            <span>add the books you intend to read to it.</span>
          </SignText>
        </li>
        <li>
          <SignNumber>
            <span>2</span>
          </SignNumber>
          <SignText>
            Create your first workout:{' '}
            <span>define a goal, choose a period, start training.</span>
          </SignText>
        </li>
        <li>
          <StyledLink to="/library">My library</StyledLink>
          <StyledLink to="/library">
            <svg width="24" height="24">
              <use xlinkHref={`${SpriteIcons}#icon-arrow`} />
            </svg>
          </StyledLink>
        </li>
      </ul>
    </GetStarted>
  );
}