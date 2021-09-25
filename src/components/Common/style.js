import styled from 'styled-components';
import vw from '../../utils/vw';

export const Button = styled.div`
  padding: ${vw(12)} ${vw(20)};
  color: #fff;
  background: #409eff;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  font-size: ${vw(24)};
  letter-spacing: 2px;

  &:active {
    filter: brightness(0.9);
  }
`;
