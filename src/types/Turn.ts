import { Mark } from "../enums/Mark";

export type Turn = Omit<Mark, Mark.Empty>;
