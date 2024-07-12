import { Link } from 'react-router-dom';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { Board } from 'domains/types';

type Props = {
  board: Board;
  id: number;
}

const BoardList = ({ board, id }: Props) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div key={board.id} className='px-8 py-12 font-semibold block rounded-md bg-gray-400'>
        <Link to={`/boards/${board.id}`}>
          {board.title}
        </Link>
      </div>
    </div>
  );
};

export default BoardList;