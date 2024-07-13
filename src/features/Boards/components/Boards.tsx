import { useState } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, rectSortingStrategy, SortableContext } from '@dnd-kit/sortable';
import BoardList from 'features/Boards/components/BoardList';

import { boardData } from 'data/boards';
import { Board } from 'domains/types';

const Boards = () => {
  const [boards, setBoards] = useState<Board[]>(boardData);

  const handleDragEnd = (ev: DragEndEvent) => {
    const { active, over } = ev;
    if (over === null) {
      return null;
    }

    if (active.id !== over.id) {
      setBoards(boards => {
        const oldBoardId = boards.findIndex(board => board.id === active.id);
        const newBoardId = boards.findIndex(board => board.id === over.id);
        return arrayMove(boards, oldBoardId, newBoardId);
      });
    }
  };

  return (
    <DndContext
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={boards} strategy={rectSortingStrategy}>
        <div className='mx-6 my-6 gap-6 grid md:grid-cols-5 lg:grid-col-5'>
          {boards.length > 0 && boards.map(board => (
            <BoardList key={board.id} board={board} id={board.id} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default Boards;