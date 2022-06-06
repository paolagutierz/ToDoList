import { createContext } from "react";

export const TodoContext = createContext({
  list: [],
  handleAddItem: () => {},
  onChangeStatus: () => {},
  onClickRemoveItem: () => {},
});
