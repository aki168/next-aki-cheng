export type GameState = "start" | "onGame" | "reset";
export type CellValue = "o" | "x" | undefined; 
export type Winner = "tie" | CellValue;

export type CellProps = {
  value: CellValue;
  toggle: (idx: number) => void;
  idx: number;
}
