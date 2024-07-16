import { Column } from "domains/types";
import { cardsData } from "data/Card";

type Props = {
  column: Column;
}

const ColumnList = ({ column }: Props) => {
  return (
    <div>
      {column.title}
      {cardsData.length > 0 && cardsData.map(card => (
        <div key={card.id} className="my-3 px-5 py-7 relative block bg-cyan-500 rounded-md">
          {card.title}
        </div>
      ))}
    </div>
  );
};

export default ColumnList;