import { EventDispatcher } from './eventDispatcher'
import { ShowProducts } from './dataBase'


class ProductsView {
    constructor(model){
        this.model = model
        this.selectButtonEvent = new EventDispatcher(this);
        
        this.init()
    }

    init(){
        this.render();

        this.createChildren();
        this.setupHandlers();
        this.enable();

        return this;
    }

    createChildren(){
        this.productsAll = document.querySelector('#content__list');
        
        this.product__containers = Array.from(document.getElementsByClassName('product__container'));
        this.product__circle = Array.from(document.getElementsByClassName('product__circle'));
        this.product__message =  Array.from(document.getElementsByClassName('product__message'));

        return this;
    }

    setupHandlers(){
        
        this.selectHandler = this.selectTaskEvent.bind(this);
        this.selectButtonHandler = this.selectButton.bind(this);
        return this;
    }

    enable(){

        this.model.selectEvent.add(this.selectHandler); 
        //this.product__containers.forEach((product_container, index)=>product_container.addEventListener('click', this.selectButtonHandler(index)));
        this.productsAll.addEventListener('click', this.selectButtonHandler);

        return this;
    }

    selectTaskEvent(index){

        this.product__container[i].classList.toggle('selected');
        this.product__circle[i].classList.toggle('selected_color');
    }

    selectButton (){
        let index = event.target.closest('.product__item').id;
        this.selectButtonEvent.notify(index);
    }

    render(){

        let productsList = new ShowProducts({
            data: this.model.products,
            parentElement: 'content__list',
            classItem: 'product__item',
            classMotto: 'product__motto',
            classTitle: 'product__title',
            classTaste: 'product__taste',
            classAmount: 'product__amount',
            classImg: 'product__img',
            classWeight: 'product__weight',
            classMessage: 'product__message'
        });
        return productsList.render();
    }
}

export { ProductsView }