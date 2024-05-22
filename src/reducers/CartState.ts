export interface Item {
    id: number;
    name: string;
    price: number
}
export interface cartState {
    Cart: Item[];
}
export type CartActions = { type: "ADD_ITEM"; payload: Item } | { type: "REMOVE_ITEM"; payload: number };