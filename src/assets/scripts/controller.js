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
        this.selectControlHandler = this.selectControl.bind(this);
    }

    enable(){
        this.view.selectButtonEvent.add(this.selectControlHandler);
    }

    selectControl(index){
        this.model.toggle(index);
        console.log(index);
    }


}

export { ProductsController }