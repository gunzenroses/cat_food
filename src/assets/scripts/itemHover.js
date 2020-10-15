let product__item = Array.from(document.getElementsByClassName('product__item'))[0];
let corner = Array.from(document.getElementsByClassName('corner'))[0];
let product__circle = Array.from(document.getElementsByClassName('product__circle'))[0];

    
product__item.onmouseover = function(){
    if (product__item.classList.contains('selected')){
        product__item.style.border = "4px solid #E52E7A";
        corner.style.border = "4px solid #E52E7A";
        product__circle.style.background = "#E52E7A";
    } else {
        product__item.style.border = "4px solid #2EA8E6";
        corner.style.border = "4px solid #2EA8E6";
        product__circle.style.background = "#2EA8E6";
    }
}

product__item.onmouseout = function(){
    if (product__item.classList.contains('selected')){
        product__item.style.border = "4px solid #D91667";
        corner.style.border = "4px solid #D91667";
        product__circle.style.background = "#D91667";
    } else {
        product__item.style.border = "4px solid #1698D9";
        corner.style.border = "4px solid #1698D9";
        product__circle.style.background = "#1698D9";
    }
}

product__item.onclick = function(){
    product__item.classList.toggle('selected');
    corner.classList.toggle('selected');
    product__circle.classList.toggle('selected_color');
}