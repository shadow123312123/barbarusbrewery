import React, {useCallback, useEffect, useState} from "react";
import {useTelegram} from "./Components/Hooks/useTelegram";
import './App.css';
import Cart from "./Components/Cart/Cart";
import Card from "./Components/Card/Card";

const {getData} = require('./db/db');
const foods = getData();

function App() {
    const {tg, queryId} = useTelegram();

    const [cartItems, setCartItems] = useState([]);

    const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

    useEffect(() => {
        tg.ready();
    }, [])

    const onSendData = useCallback(() => {
        const data = {
            products: cartItems,
            totalPrice: totalPrice,
            queryId,
        }

        fetch('http://localhost:8000/web-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }, [cartItems, queryId, totalPrice])


    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    const onAdd = (food)=> {
        const exist = cartItems.find((x)=> x.id === food.id);

        if (exist){

            setCartItems(
                cartItems.map((x)=>
                    x.id === food.id ? {...exist, quantity: exist.quantity + 1} : x
                )
            );

        } else {

            setCartItems([...cartItems, {...food, quantity: 1}]);
        }
    };

        const onRemove = (food) => {
            const exist = cartItems.find((x) => x.id === food.id);

            if (exist.quantity === 1) {

                setCartItems(cartItems.filter((x) => x.id !== food.id));

            } else {

                setCartItems(
                    cartItems.map((x) =>
                        x.id === food.id ? {...exist, quantity: exist.quantity - 1} : x
                    )
                );
            }
        };


        const onCheckout = () => {
            if(cartItems.length === 0) {
                tg.MainButton.hide();
            } else {
                tg.MainButton.show();
                tg.MainButton.setParams({
                    text: `Купить ${totalPrice} ₽`
                })
            }
        };

        return (
            <>
                <h1 className="heading">Barbarus Brewery</h1>
                <h1 className="heading">Norilsk</h1>

                <Cart cartItems={cartItems} onCheckout={onCheckout}/>
                <div className="cards__container">
                    {foods.map((food) => {
                        return (
                            <Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove}/>
                        );
                    })}
                </div>
            </>
        );
    }
export default App;
