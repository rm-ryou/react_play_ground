import { columnsData } from 'data';
import ColumnList from './ColumnList';

type Props = {
  boardId: number;
}

const Columns = () => {
  const columns = columnsData.filter(column => column.boardId === 1);

  return (
    <div className='mx-10 my-10 gap-10 flex flex-raw'>
      {columns.length > 0 && columns.map(column => (
        <div key={column.id} className='w-48 bg-gray-400 rounded-md p-2'>
          <ColumnList column={column} />
        </div>
      ))}
    </div>
  );
};

export default Columns;