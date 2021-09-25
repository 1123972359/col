import { Block } from '../Control/style';
import { Button } from '../Common/style';
import { Mask, Modal } from '../Modal/style';
import { useRef, useState } from 'react';

const Control = ({ createPlayer }) => {
  const inputRef = useRef(null);

  const [state, setState] = useState({
    visibleMask: false,
    visibleAdd: false
  });

  const handleAddClick = () => {
    setState(state => ({
      ...state,
      visibleMask: true,
      visibleAdd: true
    }));
  };

  const handleCancelCreatePlayerClick = () => {
    setState(state => ({
      ...state,
      visibleMask: false,
      visibleAdd: false
    }));
  };

  const handleCreatePlayerClick = () => {
    const value = inputRef.current.value;
    inputRef.current.value = '';
    createPlayer(value);
    handleCancelCreatePlayerClick();
  };

  return (
    <>
      <Mask visible={state.visibleMask} />
      <Block>
        <Button onClick={handleAddClick}>新增英雄</Button>
      </Block>

      {/* 新增 */}
      <Modal visible={state.visibleAdd}>
        <article className="content">
          <input
            className="input"
            ref={inputRef}
            type="text"
            placeholder="输入大名"
          />
          <div className="modal-footer">
            <Button onClick={handleCancelCreatePlayerClick}>取消</Button>
            <Button onClick={handleCreatePlayerClick}>确定</Button>
          </div>
        </article>
      </Modal>
    </>
  );
};

export default Control;
