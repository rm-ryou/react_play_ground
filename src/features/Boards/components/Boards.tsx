import BoardList from 'features/Boards/components/BoardList';

import { boardData } from 'data/boards';

const Boards = () => {
  return (
    <div>
      <h1 className='text-4xl mb-4 text-white'>Your Board</h1>
      <BoardList boards={boardData} />
    </div>
  );
};

export default Boards;