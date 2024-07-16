export interface Board {
  id: number;
  title: string;
  contents: string;
}

export interface Column {
  id: number;
  title: string;
  contents: string;
  boardId: number;
}

export interface Card {
  id: number;
  title: string;
  contents: string;
  isFinishe: boolean;
  columnId: number;
}
