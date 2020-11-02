class ShowProducts {
    constructor(params) {
        this.data = params.data
        this.parentElement = params.parentElement

        this.classContainer = params.classContainer
        this.classProduct = params.classProduct
        this.classItem = params.classItem
        this.classMotto = params.classMotto
        this.classTitle = params.classTitle
        this.classTaste = params.classTaste
        this.classAmount = params.classAmount
        this.classImg = params.classImg
        this.classCircle = params.classCircle
        this.classWeight = params.classWeight
        this.classMessage = params.classMessage
        this.classSpan = params.classSpan

        
        this.classContainerDisabled = params.classContainerDisabled
        this.classProductDisabled = params.classProductDisabled
        this.classItemDisabled = params.classItemDisabled
        this.classMottoDisabled = params.classMottoDisabled
        this.classTitleDisabled = params.classTitleDisabled
        this.classTasteDisabled = params.classTasteDisabled
        this.classAmountDisabled = params.classAmountDisabled
        this.classImgDisabled = params.classImgDisabled
        this.classCircleDisabled = params.classCircleDisabled
        this.classMessageDisabled = params.classMessageDisabled
    }

    render(){
        let elem = document.querySelector('#content__list');
        elem.innerHTML = '';
        this.data.map(product => {
            let availability = (product.itemLeft > 0);
            let classContainer = availability ?  this.classContainer : this.classContainerDisabled ;
            let classProduct = availability ? this.classProduct : this.classProductDisabled;
            let classItem = availability ? this.classItem : this.classItemDisabled;
            let classMotto = availability ? this.classMotto : this.classMottoDisabled;
            let classTitle = availability ? this.classTitle : this.classTitleDisabled;
            let classTaste = availability ? this.classTaste : this.classTasteDisabled;
            let classAmount = availability ? this.classAmount : this.classAmountDisabled;
            let classImg = availability ? this.classImg : this.classImgDisabled;
            let classCircle = availability ? this.classCircle : this.classCircleDisabled;
            let classMessage = availability ? this.classMessage : this.classMessageDisabled;

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
                                <p class=${this.classWeight}>${product.weight}</p>
                                <p class="product__subweight">кг</p>
                            </div>
                            </div>
                        </div>
                    </div>
                <p class=${classMessage}>${product.message}<span class='link'>${product.span}</span></p>
                </li>
            `)
        });
    }
}

export { ShowProducts }