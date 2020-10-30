import { productsData } from '../data/products.data'
import { EventDispatcher } from './eventDispatcher'

class ProductsModel {
    constructor(){
        this.products = [... productsData]
        this.selected = []
        this.selectEvent = new EventDispatcher(this);
    }

    toggle(index){
        let num = parseInt(index);
        if (this.selected.includes(num)){
            this.selected.filter((el)=> el !== num);
        } else {this.selected.push(num)}
        // if (!this.selected.element) then add and give it 'true'
        // if selected true - give it false 
        console.log(this.selected);
        this.selectEvent.notify(this.selected);
    }
}

export { ProductsModel }
