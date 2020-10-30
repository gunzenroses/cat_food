class ShowProducts {
    constructor(params) {
        this.data = params.data
        this.parentElement = params.parentElement
        this.classItem = params.classItem
        this.classMotto = params.classMotto
        this.classTitle = params.classTitle
        this.classTaste = params.classTaste
        this.classAmount = params.classAmount
        this.classImg = params.classImg
        this.classWeight = params.classWeight
        this.classMessage = params.classMessage
        this.classSpan = params.classSpan
    }

    render(){
        let elem = document.querySelector('#content__list');
        this.data.map(product => {
            return elem.innerHTML +=
            `
                <li class="content__item">
                    <div class="product__container">
                        <div class=${this.classItem} id=${product.id}>
                            
                            <p class=${this.classMotto}>${product.motto}</p>
                            <h4 class=${this.classTitle}>${product.title}</h4>
                            <p class=${this.classTaste}>${product.taste}</p>
                            <p class=${this.classAmount}>${product.amount}</p>
                            <img class=${this.classImg} src="${product.img}", alt="cat")/>
                            <div class="product__circle">
                                <p class=${this.classWeight}>${product.weight}</p>
                                <p class="product__subweight">кг</p>
                            </div>
                            </div>
                        </div>
                    </div>
                <p class=${this.classMessage}>${product.message}<span class='link'>${product.span}</span></p>
                </li>
            `
        })
    }
}


export { ShowProducts }