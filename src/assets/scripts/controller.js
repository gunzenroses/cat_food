class ProductsController {
    constructor(model, view) {
        this.model = model
        this.view = view

        this.init()
    }

    init(){
        this.createChildren();
        this.setupHandlers();
        this.enable();
        
        return this;
    }

    createChildren(){
        return this;
    }

    setupHandlers(){
        this.selectHandler = this.select.bind(this);
        this.unselectHandler = this.unselect.bind(this);
    }

    enable(){
        this.view.fromViewSelectEvent.add(this.selectHandler);
        this.view.fromViewUnselectEvent.add(this.unselectHandler);
    }

    select(index){
        console.log(`2 controller: select ${index}`)
        this.model.fromControlSelect(index);
        
    }

    unselect(index){
        console.log(`2 controller: unselect ${index}`)
        this.model.fromControlUnselect(index);
    }


}

export { ProductsController }