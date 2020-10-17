for (let i=0; i<3;i++){

    let product__container = Array.from(document.getElementsByClassName('product__container'))[i];
    let product__circle = Array.from(document.getElementsByClassName('product__circle'))[i];

    product__container.onmouseover = function(){
        if (product__container.classList.contains('selected')){
            product__container.style.background = "linear-gradient(135.37deg, transparent 25.5px, #E52E7A 0)";
            product__circle.style.background = "#E52E7A";
        } else {
            product__container.style.background = "linear-gradient(135.37deg, transparent 25.5px, #2EA8E6 0)";
            product__circle.style.background = "#2EA8E6";
        }
    }

    product__container.onmouseout = function(){
        if (product__container.classList.contains('selected')){
            product__container.style.background = "linear-gradient(135.37deg, transparent 25.5px, #D91667 0)";
            product__circle.style.background = "#D91667";
        } else {
            product__container.style.background = "linear-gradient(135.37deg, transparent 25.5px, #1698D9 0)";
            product__circle.style.background = "#1698D9";
        }
    }

    product__container.onclick = function(){
        console.log(Array.from(product__container.classList));
        product__container.classList.toggle('selected');
        product__circle.classList.toggle('selected_color');
    }

}