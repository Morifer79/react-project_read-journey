import styled from 'styled-components';
import { theme } from '../../../../../styleset/theme';

export const Wrapper = styled.div`
  img {
    margin-block-end: ${theme.spacing(4)};
    border-radius: ${theme.radii.s};
    cursor: pointer;
    inline-size: 137px;
    block-size: 208px;
  }
  h4 {
    margin-block-end: ${theme.spacing(2)};
    font-size: 14px;
    font-weight: 700;
    line-height: 1.285;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-inline-size: 95px;
    @media screen and (min-width: 768px) {
      max-inline-size: 89px;
    }
  }
  h5 {
    color: ${theme.colors.lightgrey};
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-inline-size: 95px;
    @media screen and (min-width: 768px) {
      max-inline-size: 89px;
    }
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BtnDelete = styled.button`
  background-color: transparent;
  border: none;
  svg {
    inline-size: 28px;
    block-size: 28px;
    fill: transparent;
    stroke: #e85050;
    border-radius: ${theme.radii.xxl};
    padding: ${theme.spacing(1.75)};
    border: 1px solid rgba(232, 80, 80, 0.2);
    background: rgba(232, 80, 80, 0.1);
    transition: stroke ${theme.transition};
  }

  svg:is(:hover, :focus, :active) {
    stroke: ${theme.colors.accent};
  }
`;
