import { Content, Block } from './style';
import { Button } from '../Common/style';
import { Mask, Modal } from '../Modal/style';
import { useState, useRef } from 'react';

const Player = ({
  players = [],
  handleDelClick = () => {},
  handleEditPlayerClick = () => {}
}) => {
  const data = {
    nameRef: useRef(null),
    initRef: useRef(null),
    borrowRef: useRef(null),
    currentRef: useRef(null)
  };
  const [state, setState] = useState({
    visibleMask: false,
    visibleEdit: false,
    editIdx: 0
  });

  const handleCancelEditPlayerClick = () => {
    setState(state => ({
      ...state,
      visibleMask: false,
      visibleEdit: false
    }));
  };

  const handleEditShowClick = (item, idx) => {
    data.nameRef.current.value = item.name;
    data.initRef.current.value = item.init;
    data.borrowRef.current.value = item.borrow;
    data.currentRef.current.value = item.current;
    setState(state => ({
      ...state,
      visibleMask: true,
      visibleEdit: true,
      editIdx: idx
    }));
  };

  const handleEditClick = (data, idx) => {
    handleEditPlayerClick(data, idx);
    handleCancelEditPlayerClick();
  };

  return (
    <>
      <Mask visible={state.visibleMask} />

      <Content>
        {players.map((item, idx) => (
          <Block key={item.id}>
            <div> 大名：{item.name || '超人迪加'}</div>
            <div> 初始分数： {item.init || 0} </div>
            <div> 租借分数： {item.borrow || 0} </div>
            <div> 当前分数： {item.current || 0} </div>

            <Button
              className="edit-btn"
              onClick={() => handleEditShowClick(item, idx)}
            >
              编辑
            </Button>
            <Button className="del-btn" onClick={() => handleDelClick(idx)}>
              删除
            </Button>
          </Block>
        ))}
      </Content>
      {/* 编辑 */}
      <Modal visible={state.visibleEdit}>
        <article className="content">
          <input
            className="input"
            ref={data.nameRef}
            type="text"
            placeholder="输入大名"
          />
          <input
            className="input"
            ref={data.initRef}
            type="number"
            placeholder="输入初始分数"
          />
          <input
            className="input"
            ref={data.borrowRef}
            type="number"
            placeholder="输入租借分数"
          />
          <input
            className="input"
            ref={data.currentRef}
            type="number"
            placeholder="输入当前分数"
          />
          <div className="modal-footer">
            <Button onClick={handleCancelEditPlayerClick}>取消</Button>
            <Button onClick={() => handleEditClick(data, state.editIdx)}>
              确定
            </Button>
          </div>
        </article>
      </Modal>
    </>
  );
};

export default Player;
