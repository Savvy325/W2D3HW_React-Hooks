import React, { FormEvent, useReducer, useState } from "react";
import cartReducer from "../reducers/CartReducer";
import { Item } from "../reducers/CartState";

const ShoppingCart = () => {
    const [state, dispatch] = useReducer(cartReducer, { Cart: [] });
    const [itemName, setItemName] = useState<string>("");
    const [itemPrice, setItemPrice] = useState<number>(0);
    const addItem = (event: FormEvent) => {
        event.preventDefault();
        const newItem: Item = { id: Date.now(), name: itemName, price: itemPrice };
        dispatch({ type: "ADD_ITEM", payload: newItem });
        setItemName("");
        setItemPrice(0);
    };
    const removeItem = (itemId: number) => {
        dispatch({ type: "REMOVE_ITEM", payload: itemId });
    };

    const totalCost = state.Cart.reduce((total, item) => total + item.price, 0);

    return (
        <div>
            <form onSubmit={addItem}>
                <input
                    type="text"
                    value={itemName}
                    onChange={(event) => setItemName(event.target.value)}
                    placeholder="Item Name"
                />
                <input
                    type="number"
                    value={itemPrice}
                    onChange={(event) => setItemPrice(parseFloat(event.target.value))}
                    placeholder="Item Price"
                />
                <button type="submit">Add Item</button>
            </form>
            <ul>
                {state.Cart.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <p>Total Cost: ${totalCost}</p>
        </div>
    );
};
export default ShoppingCart;