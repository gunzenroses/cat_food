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
        console.log(`3. info that you selected card[${index}] with index type "${typeof(index)}" came (model.js: method fromControlSelect)`)
        this.selected.push(index);
        this.products[index].selected = !this.products[index].selected;
            console.log(`4. now this.card[${index}].selected = ${this.products[index].selected} (model.js: method fromControlSelect)`);
        this.fromModelSelectEvent.notify(index);
    }

    fromControlUnselect(index){
            console.log(`3. info that you unselected card[${index}] with index type "${typeof(index)}" came (model.js: method fromControlSelect)`)
        this.selected = this.selected.filter(element => element!==index);
        this.products[index].selected = !this.products[index].selected;
            console.log(`4. now this.card[${index}].selected = ${this.products[index].selected} (model.js: method fromControlSelect)`);
        this.fromModelSelectEvent.notify(index);
    }
}

export { ProductsModel }