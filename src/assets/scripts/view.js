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
        this.productsAll = document.querySelector('#content__list');
        //this.product__containers = Array.from(document.getElementsByClassName('product__container'));
        //this.product__circle = Array.from(document.getElementsByClassName('product__circle'));
        //this.product__message =  Array.from(document.getElementsByClassName('product__message'));

        return this;
    }

    setupHandlers(){
        
        this.fromViewToggleHandler = this.fromViewToggle.bind(this);
        this.fromModelSelectHandler = this.fromModelSelect.bind(this);

        return this;
    }

    enable(){
        this.productsAll.addEventListener('click', this.fromViewToggleHandler);
        this.model.fromModelSelectEvent.add(this.fromModelSelectHandler);
        return this;
    }

    fromModelSelect(idx){
        let elem = document.getElementById(idx);
        let container = elem.querySelector('.product__container');
        let circle = elem.querySelector('.product__circle');
        let message = elem.querySelector('.product__message');
            if (container.classList.contains('selected')){
                container.classList.remove('selected');
                circle.classList.remove('selected_color');
                message.innerHTML = `  
                                        <div>
                                            ${this.model.products[idx].message}
                                            <span class='link'>${this.model.products[idx].span}</span>
                                        </div>
                                    `
            } else {
                container.classList.add('selected');
                circle.classList.add('selected_color');
                message.innerHTML = `${this.model.products[idx].message2}`;
            }
    }


    fromViewToggle(){
        try {
            let index = event.target.closest('.content__item').id;
                if (this.model.selected.includes(index)){
                        console.log(`1 view: fromViewToggle: ${index} already exist`);
                    this.fromViewUnselectEvent.notify(index);
                } else {
                        console.log(`1 view: fromViewToggle: ${index} should be added`);
                    this.fromViewSelectEvent.notify(index);
                }
        } catch (e){
            return false;
        }
    }

    render(){
        let productsList = new ShowProducts({
            data: this.model.products,
            parentElement: 'content__list',

            classContainer: 'content__item',
            classProduct: 'product__container',
            classItem: 'product__item',
            classMotto: 'product__motto',
            classTitle: 'product__title',
            classTaste: 'product__taste',
            classAmount: 'product__amount',
            classImg: 'product__img',
            classCircle: 'product__circle',
            classWeight: 'product__weight',
            classMessage: 'product__message',

            classContainerDisabled: 'content__item_disabled',
            classProductDisabled: 'product__container_disabled',
            classItemDisabled: 'product__item_disabled',
            classMottoDisabled: 'product__motto_disabled',
            classTitleDisabled: 'product__title_disabled',
            classTasteDisabled: 'product__taste_disabled',
            classAmountDisabled: 'product__amount_disabled',
            classImgDisabled: 'product__img_disabled',
            classCircleDisabled: 'product__circle_disabled',
            classMessageDisabled: 'product__message_disabled',
        });

        return productsList.render();
    }
}


export { ProductsView }