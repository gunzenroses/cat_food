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
        this.fromModelSelectEvent.notify(this.selected);
    }

    fromControlUnselect(index){
        console.log(`3 model: fromControlUnselect: ${index} with type ${typeof(index)}`)
        this.selected = this.selected.filter(element => element!==index);
        this.fromModelSelectEvent.notify(this.selected);
    }
}

export { ProductsModel }




// let num = parseInt(index);

//         if (this.selected.includes(num)){
//             ////не работает почему?
//             // console.log(this.selected)
//             this.selected.filter((el)=> el !== num);
//         } else {this.selected.push(num)}
//             // if (!this.selected.element) then add and give it 'true'
//             // if selected true - give it false 

//         this.selectEvent.notify(this.selected);