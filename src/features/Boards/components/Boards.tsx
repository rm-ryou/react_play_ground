import { useState } from 'react';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import { rectSortingStrategy, SortableContext } from '@dnd-kit/sortable';
import BoardList from 'features/Boards/components/BoardList';

import { boardData } from 'data/boards';
import { Board } from 'domains/types';

const Boards = () => {
  const [boards, setBoards] = useState<Board[]>(boardData);

  const handleDragEnd = () => {
    console.log("Druuuuuuuuug!!");
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <h1 className='text-4xl mb-4 text-white'>Your Board</h1>
      <SortableContext items={boards} strategy={rectSortingStrategy}>
        <div className='mx-6 my-6 gap-6 grid md:grid-cols-6 lg:grid-col-5'>
          {boardData.length > 0 && boardData.map(board => (
            <BoardList key={board.id} board={board} id={board.id} />
          ))}
        </div>
      </SortableContext>
      <DragOverlay>
      </DragOverlay>
    </DndContext>
  );
};

export default Boards;