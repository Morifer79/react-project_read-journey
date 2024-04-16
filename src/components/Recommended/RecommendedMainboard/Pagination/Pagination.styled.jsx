import styled from 'styled-components';
import { theme } from '../../../../styleset/theme';

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 20px;
    font-weight: 700;
    line-height: 1;
  }

  div {
    display: flex;
    gap: ${theme.spacing(4)};
  }
`;

export const BtnSlider = styled.button`
  background-color: transparent;
  border: none;

  svg {
    inline-size: 32px;
    block-size: 32px;
    padding: ${theme.spacing(2)};
    border: 1px solid ${theme.colors.brd};
    border-radius: ${theme.radii.xxl};
    fill: ${theme.colors.brd};

    @media screen and (min-width: 768px) {
      inline-size: 40px;
      block-size: 40px;
    }
  }
`;
