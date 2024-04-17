import {
  BtnDel,
  DiaryBody,
  LeftSide,
  RightSide,
  VerticalLine,
} from './DiaryBlock.styled';
import SpriteIcons from '../../../../../images/sprite.svg';

export const DiaryBlock = () => {
  return (
    <DiaryBody>
      <VerticalLine />
      <ul>
        <li>
          <LeftSide>
            <svg>
              <use xlinkHref={`${SpriteIcons}#icon-diary-dot`} />
            </svg>
            <div>
              <h4>21.10.2023</h4>
              <h5>7.6%</h5>
              <h6>29 minutes</h6>
            </div>
          </LeftSide>
          <RightSide>
            <div>
              <h4>42 pages</h4>
              <svg>
                <use xlinkHref={`${SpriteIcons}#icon-diagram`} />
              </svg>
              <h5>45 pages per hour</h5>
            </div>
            <BtnDel>
              <svg>
                <use xlinkHref={`${SpriteIcons}#icon-trash`} />
              </svg>
            </BtnDel>
          </RightSide>
        </li>
        <li>
          <LeftSide>
            <svg>
              <use xlinkHref={`${SpriteIcons}#icon-diary-dot`} />
            </svg>
            <div>
              <h4>19.10.2023</h4>
              <h5>10.5%</h5>
              <h6>40 minutes</h6>
            </div>
          </LeftSide>
          <RightSide>
            <div>
              <h4>87 pages</h4>
              <svg>
                <use xlinkHref={`${SpriteIcons}#icon-diagram`} />
              </svg>
              <h5>45 pages per hour</h5>
            </div>
            <BtnDel>
              <svg>
                <use xlinkHref={`${SpriteIcons}#icon-trash`} />
              </svg>
            </BtnDel>
          </RightSide>
        </li>
        <li>
          <LeftSide>
            <svg>
              <use xlinkHref={`${SpriteIcons}#icon-diary-dot`} />
            </svg>
            <div>
              <h4>17.10.2023</h4>
              <h5>8.5%</h5>
              <h6>30 minutes</h6>
            </div>
          </LeftSide>
          <RightSide>
            <div>
              <h4>78 pages</h4>
              <svg>
                <use xlinkHref={`${SpriteIcons}#icon-diagram`} />
              </svg>
              <h5>45 pages per hour</h5>
            </div>
            <BtnDel>
              <svg>
                <use xlinkHref={`${SpriteIcons}#icon-trash`} />
              </svg>
            </BtnDel>
          </RightSide>
        </li>
      </ul>
    </DiaryBody>
  );
};
