import styled from 'styled-components';
import vw from './../../utils/vw';

export const Mask = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  left: 0;
  top: 0;
  opacity: ${p => (p.visible ? '1' : '0')};
  z-index: ${p => (p.visible ? '9' : '-1')};
`;

export const Modal = styled.div`
  width: ${vw(600)};
  z-index: 10;
  position: fixed;
  left: 50%;
  top: ${p => (p.visible ? '50%' : '150%')};
  transform: translate(-50%, -50%);
  transition-duration: 250ms;
  font-size: ${vw(24)};

  .content {
    width: 100%;
    height: 100%;
    background: #fff;
    padding: ${vw(30)};
    box-sizing: border-box;
  }

  .input {
    padding: ${vw(12)} ${vw(20)};
    box-sizing: border-box;
    width: 100%;
    font-size: ${vw(24)};
    margin-top: ${vw(20)};

    &:nth-child(1) {
      margin-top: 0;
    }
  }

  .modal-footer {
    margin-top: ${vw(20)};
    display: flex;
    justify-content: flex-end;
    div {
      margin-left: ${vw(20)};
    }
  }
`;
