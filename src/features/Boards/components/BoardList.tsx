import type { Board } from 'domains/types';
import { Link } from 'react-router-dom';

type Props = {
  boards: Board[];
}

const BoardList = ({ boards }: Props) => {
  return (
    <div className='mx-6 my-6 gap-6 grid md:grid-cols-6 lg:grid-col-5'>
      {boards?.length > 0 && boards.map(board => (
        <div key={board.id} className='px-8 py-12 font-semibold block rounded-md bg-gray-400'>
          <Link to={`/boards/${board.id}`}>
            {board.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BoardList;