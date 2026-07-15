export function validateProduct(product){
    let isValid = false
    if(product.name.trim() && product.categoryId > 0 && product.selling_price > 0
    && product.buying_price > 0 && product.currencyId > 0){
        isValid = true
    }
    return isValid
}

export function ValidateCategory(category){
    let isValid = false
    if(!category.name.trim()){
        isValid = true
    }
    return isValid
}

export function validateCostProfile(cost){
    let isValid = false
    if( cost.product_id === 0|| cost.return_rate < 0 || cost.payment_gateway_fee < 0 
        || cost.packaging_cost < 0 || cost.shipping_cost < 0
        || cost.miscellanious < 0){
            isValid = false
    }
    else{
        isValid = true
    }
    return isValid
}