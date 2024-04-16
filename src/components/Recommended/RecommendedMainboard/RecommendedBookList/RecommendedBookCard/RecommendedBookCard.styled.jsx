import styled from 'styled-components';
import { theme } from '../../../../../styleset/theme';

export const CardWrapper = styled.div`
  cursor: pointer;
  img {
    inline-size: 137px;
    block-size: 208px;
    border-radius: ${theme.radii.s};
    margin-block-end: ${theme.spacing(4)};
  }
  h4 {
    font-size: 14px;
    font-weight: 700;
    line-height: 1.285;
    margin-block-end: ${theme.spacing(1)};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-inline-size: 137px;
  }
  h5 {
    color: ${theme.colors.lightgrey};
    font-size: 10px;
    font-weight: 500;
    line-height: 1.2;
  }
`;
