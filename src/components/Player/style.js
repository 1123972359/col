import styled from 'styled-components';
import vw from '../../utils/vw';

export const Content = styled.div`
  width: 100vw;
  height: ${vw(1200)};
  overflow-x: hidden;
  overflow-y: auto;
`;

export const Block = styled.div`
  width: ${vw(690)};
  padding: ${vw(20)};
  margin: ${vw(20)} auto;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0px 0px 12px #eee;
  position: relative;
  font-size: ${vw(24)};

  .edit-btn {
    position: absolute;
    right: ${vw(20)};
    top: ${vw(20)};
  }

  .del-btn {
    position: absolute;
    right: ${vw(20)};
    top: ${vw(90)};
    background: #f56c6c;
  }
`;
