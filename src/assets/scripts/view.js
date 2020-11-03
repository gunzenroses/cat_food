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

    fromModelSelect(item){

        // // this.model.products[indx].selected = !this.model.products[indx].selected;
        // // console.log(this.model.products[indx].selected);
        // let indexedElement = document.getElementById(indx);
        // let indexedContainer = indexedElement.querySelector('.product__container');
        // let circle = indexedElement.querySelector('.product__circle');

        //     if (indexedContainer.classList.contains('selected')){
        //         indexedContainer.classList.remove('selected');
        //         circle.classList.remove('selected_color');
        //         console.log(indexedContainer.classList);
        //     } else {
        //         indexedContainer.classList.add('selected');
        //         circle.classList.add('selected_color');
        //         console.log(indexedContainer.classList);
        //     }

        this.render(item);
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

        let elem = document.querySelector('#content__list');
        elem.innerHTML = '';
        // let products = this.model.products;
        // console.log(this.model.products);

        this.model.products.map(product => {

            console.log(product);
            // checking the availability of the product item and if it's selected
            let unavailable = (product.itemLeft < 1);
            let ifSelected = product.selected;
            
            console.log(`5 view: ifSelected: ${ifSelected}`);

            // choosing style in dependance with availability of the product
                let classContainer = unavailable ? 'content__item_disabled' : 'content__item';
                let classProduct = unavailable 
                                    ? 'product__container_disabled' 
                                    : ifSelected ? 'product__container_selected' : 'product__container';
                
                let classItem = unavailable ? 'product__item_disabled' : 'product__item';
                let classMotto = unavailable ? 'product__motto_disabled' : 'product__motto' ;
                let classTitle = unavailable ? 'product__title_disabled' : 'product__title';
                let classTaste = unavailable ? 'product__taste_disabled' : 'product__taste';
                let classAmount = unavailable ? 'product__amount_disabled' : 'product__amount';
                let classImg = unavailable ? 'product__img_disabled' : 'product__img';
                let classCircle = unavailable 
                                            ? 'product__circle_disabled' 
                                            : ifSelected ? 'product__circle_selected' : 'product__circle';

                let classMessage = unavailable ? 'product__message_disabled' : 'product__message';
            
            // choosing message in dependance with availability of the product and if it's selected
                let productMessage = unavailable 
                                    ? product.messageDisabled
                                    : ifSelected ? product.messageSelected : product.message;
                let productSpan = unavailable 
                                    ? "" 
                                    : ifSelected ? "" : product.span;

            return (
                elem.innerHTML +=
            `
                <li class=${classContainer} id=${product.id}>
                    <div class=${classProduct}>
                        <div class=${classItem}>
                            <p class=${classMotto}></p>
                            <h4 class=${classTitle}>${product.title}</h4>
                            <p class=${classTaste}>${product.taste}</p>
                            <p class=${classAmount}>${product.amount}</p>
                            <img class=${classImg} src="${product.img}", alt="cat")/>
                            <div class=${classCircle}>
                                <p class='product__weight'>${product.weight}</p>
                                <p class='product__subweight'>кг</p>
                            </div>
                            </div>
                        </div>
                    </div>
                <p class=${classMessage}>${productMessage}<span class='link'>${productSpan}</span></p>
                </li>
            `)
        });
    }
}


export { ProductsView }