import { productsData } from '../data/products.data'

const products = [...productsData];

for (let i=0; i<3;i++){

    //make variables to interact with DOM
    let product__container = Array.from(document.getElementsByClassName('product__container'))[i];
    let product__circle = Array.from(document.getElementsByClassName('product__circle'))[i];
    let product__message =  Array.from(document.getElementsByClassName('product__message'))[i];

    
    
    product__container.onmouseover = ifMouseOver();
    
    product__container.onmouseout = ifMouseOut();

    //model: add class to item when 'onclick'
    product__container.onclick = function(){
        product__container.classList.toggle('selected');
        product__circle.classList.toggle('selected_color');

        //view: change message in dependance with class 'selected'
        ifMouseOver();
        ifSelectedMessage();
    }

    let ifMouseOver = function(){
        if (product__container.classList.contains('selected')){
            product__container.style.background = "linear-gradient(135deg, transparent 30px, #E52E7A 0)";
            product__circle.style.background = "#E52E7A";
        } else {
            product__container.style.background = "linear-gradient(135deg, transparent 30px, #2EA8E6 0)";
            product__circle.style.background = "#2EA8E6";
        }
    }

    let ifMouseOut = function(){
        if (product__container.classList.contains('selected')){
            product__container.style.background = "linear-gradient(135deg, transparent 30px, #D91667 0)";
            product__circle.style.background = "#D91667";
        } else {
            product__container.style.background = "linear-gradient(135deg, transparent 30px, #1698D9 0)";
            product__circle.style.background = "#1698D9";
        }
    }

    let ifSelectedMessage = function(){
        if (product__container.classList.contains('selected')){
            product__message.innerHTML = `${products[i].message2}`;
        } else {
            product__message.innerHTML = `  
                                        <div>
                                            ${products[i].message}
                                            <span class='link'>${products[i].span}</span>
                                        </div>
                                        `
    }
}

}