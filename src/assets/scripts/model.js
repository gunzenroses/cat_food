import { productsData } from '../data/products.data'
import { EventDispatcher } from './eventDispatcher'

class ProductsModel {
    constructor(){
        this.products = [...productsData]
        this.selected = []
        this.fromModelSelectEvent = new EventDispatcher(this);
    }

    fromControlSelect(index){
        console.log(`3 model: fromControlSelect: ${index} with type ${typeof(index)}`)
        this.selected.push(index);
        this.fromModelSelectEvent.notify(index);
    }

    fromControlUnselect(index){
        console.log(`3 model: fromControlUnselect: ${index} with type ${typeof(index)}`)
        this.selected = this.selected.filter(element => element!==index);
        this.fromModelSelectEvent.notify(index);
    }
}

export { ProductsModel }