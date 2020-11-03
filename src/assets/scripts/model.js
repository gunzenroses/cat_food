import { productsData } from '../data/products.data'
import { EventDispatcher } from './eventDispatcher'

class ProductsModel {
    constructor(){
        this.products = [...productsData]
        this.selected = []
        this.fromModelSelectEvent = new EventDispatcher(this);
        this.fromModelDisabledEvent = new EventDispatcher(this);
    }

    fromControlSelect(index){
        console.log(`3 model: fromControlSelect: ${index} with type ${typeof(index)}`)
        this.selected.push(index);
        this.products[index].selected = !this.products[index].selected;
        console.log(`4: model: this.products ${index}.selected = ${this.products[index].selected}`);
        this.fromModelSelectEvent.notify(this.products);
    }

    fromControlUnselect(index){
        console.log(`3 model: fromControlUnselect: ${index} with type ${typeof(index)}`)
        this.selected = this.selected.filter(element => element!==index);
        this.products[index].selected = !this.products[index].selected;
        console.log(`4: model: this.products ${index}.selected = ${this.products[index].selected}`);
        this.fromModelSelectEvent.notify(this.products);
    }
}

export { ProductsModel }