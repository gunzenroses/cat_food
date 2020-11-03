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

            // checking the availability of the product item
            let unavailable = (product.itemLeft < 1);

            let classContainer = unavailable ? this.classContainerDisabled : this.classContainer ;
            let classProduct = unavailable ? this.classProductDisabled : this.classProduct;
            let classItem = unavailable ? this.classItemDisabled : this.classItem;
            let classMotto = unavailable ? this.classMottoDisabled : this.classMotto ;
            let classTitle = unavailable ? this.classTitleDisabled : this.classTitle;
            let classTaste = unavailable ? this.classTasteDisabled : this.classTaste;
            let classAmount = unavailable ? this.classAmountDisabled : this.classAmount;
            let classImg = unavailable ? this.classImgDisabled : this.classImg;
            let classCircle = unavailable ? this.classCircleDisabled : this.classCircle;
            let classMessage = unavailable ? this.classMessageDisabled : this.classMessage;
            
            let productMessage = unavailable ? product.messageDisabled : product.message ;
            let productSpan = unavailable ? "" : product.span ;

            //checking if item selected
                // let selected = product.selected;

                // let productMessage = unavailable ? product.messageDisabled : 
                //                     selected ? product.messageSelected : product.message;
                //                     console.log(`product message is equal to ${productMessage}`)
                // let productSpan = unavailable ? "" : 
                //                     selected ? "" : product.span;

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
                <p class=${classMessage}>${productMessage}<span class='link'>${productSpan}</span></p>
                </li>
            `)
        });
    }
}

export { ShowProducts }