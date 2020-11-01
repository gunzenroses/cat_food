import { EventDispatcher } from './eventDispatcher'
import { ShowProducts } from './dataBase'


class ProductsView {
    constructor(model){
        this.model = model
        this.fromViewSelectEvent = new EventDispatcher(this)
        this.fromViewUnselectEvent = new EventDispatcher(this)
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
        //parentElement for productItems
        this.productsAll = document.querySelector('#content__list');
        
        // // this.product__containers = Array.from(document.getElementsByClassName('product__container'));
        // // this.product__circle = Array.from(document.getElementsByClassName('product__circle'));
        // // this.product__message =  Array.from(document.getElementsByClassName('product__message'));

        return this;
    }

    setupHandlers(){
        
        this.fromViewToggleHandler = this.fromViewToggle.bind(this);
        this.fromModelSelectHandler = this.fromModelSelect.bind(this);
        return this;
    }

    enable(){
        // //this.product__containers.forEach((product_container, index)=>product_container.addEventListener('click', this.selectButtonHandler(index)));
        this.productsAll.addEventListener('click', this.fromViewToggleHandler);
        this.model.fromModelSelectEvent.add(this.fromModelSelectHandler);
        return this;
    }

    

    fromModelSelect(arr){
        console.log(`4 view: fromModelSelect: current selected array has ${arr}`)
        // arr.forEach(index => {
        //     console.log(this.product__container);
        //     this.product__container[index].classList.toggle('selected');
        //     this.product__circle[index].classList.toggle('selected_color');
        // })
    }

    fromViewToggle(){
        let index = event.target.closest('.product__item').id;
        if (this.model.selected.includes(index)){
                console.log(`1 view: fromViewToggle: ${index} already exist`);
            this.fromViewUnselectEvent.notify(index);
        } else {
            console.log(`1 view: fromViewToggle: ${index} should be added`);
                this.fromViewSelectEvent.notify(index);
        }
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