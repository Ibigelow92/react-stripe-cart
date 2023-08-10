import { createContext, useState } from "react";
import { productsArray, getProductData } from "./ProductsStore";

export const CartContext = createContext({
    items: [],
    // There's no logic in the function because we do not define functions inside the context
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
});

export function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState([]);

    function getProductQuantity(id) {
        // The question mark makes it so we don't ask the quantity if it's undefined
        const quantity = cartProducts.find(product => product.id === id)?.quantity

        if (quantity === undefined) {
            return 0;
        }

        return quantity;
    }

    function addOneToCart(id) {
        const quantity = getProductQuantity(id);

        if(quantity === 0) { // product is not in cart
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        } else { // product is in cart
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id // if condition
                    // ternary operator checks if it's true
                    // if the product in question is of a certain ID
                    // the ... returns all the different properties of product
                    ? {...product, quantity: product.quantity + 1} // if statatement is true
                    : product                                      // if statement is false
                )
            )
        }
    }

    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity == 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id 
                    ? {...product, quantity: product.quantity - 1} 
                    : product                                     
                )
            )
        }
    }

    function deleteFromCart(id) {
        setCartProducts(
            cartProducts =>
            // .filter starts with an empty array []
            // if an object meets a condition, it adds it to the array
            cartProducts.filter(currentProduct => {
                return currentProduct.id != id;
            })
        )
    }

    function getTotalCost() {
        // initializes it with the value of 0
        let totalCost = 0;
        // maps over our cart products array
        // point an arrow function to the logic we want to use for this map
        cartProducts.map((cartItem) => {
            // get product data of the cart item .id
            const productData = getProductData(cartItem.id);
            // the above product data object gives us access to the price below
            totalCost += (productData.price * cartItem.quantity);
        });
        return totalCost;
    }

    // We can use these throughout our application because we pass them into the 
    // value below
    const contextValue = {
        items: [],
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

// In order for our app to use this provider, we need to wrap it around 
// our whole application
export default CartProvider;
