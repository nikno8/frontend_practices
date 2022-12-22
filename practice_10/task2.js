let cart={
    'popcorn':{
        "name": "sweat",
        "count": 5,
    },
    '3d_glasses': {
        "name": "glasses",
        "count": 5,
    }
};



document.onclick  = event =>{
    if(event.target.classList.contains('plus')){
        plusFunction(event.target.dataset.id);
    }
    else if (event.target.classList.contains('minus')){
        minusFunction(event.target.dataset.id);
    }
}

// увеличение количества товаров
const plusFunction = id =>{
    cart[id]['count']++;
    renderCart();
}

// уменьшение количества товаров
const minusFunction = id =>{
    if(cart[id]['count']-1 == 0){
        deleteFunction(id);
        return true;
    }
    cart[id]['count']--;
    renderCart();
}

// удаление товара
const deleteFunction = id =>{
    delete cart[id];
    renderCart();
}

const renderCart = () =>{
    console.log(cart);
}

renderCart();