import styled from 'styled-components';
import vw from './../../utils/vw';

export const Block = styled.div`
  width: 100%;
  background: #fff;
  box-shadow: 0px 0px 12px #eee;
  padding: ${vw(26)} ${vw(20)} ${vw(40)} ${vw(20)};
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
  font-size: ${vw(24)};
`;
