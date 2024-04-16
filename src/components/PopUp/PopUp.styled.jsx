import { theme } from '../../styleset/theme';
import styled from 'styled-components';

export const ModalHeader = styled.div`
  height: auto;
  display: flex;
  justify-content: space-between;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;
  padding: 0;
  border: none;
  background: transparent;

  & svg {
    stroke: ${theme.colors.light};
    transition: border ${theme.transition};

    &:is(:hover, :focus) {
      border: 1.5px solid ${theme.colors.light};
      border-radius: ${theme.radii.xxl};
    }
  }
`;
