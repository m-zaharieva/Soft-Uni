function magazinZaPlodove(product,dayOfWeek,quantity)
{
    let price = 0;
    let isError = false;
    if(dayOfWeek===`Monday`|| dayOfWeek===`Tuesday`
        || dayOfWeek===` Wednesday` || dayOfWeek===`Thursday` || dayOfWeek===`Friday`)
    {
        switch(product)
        {
            case `banana`:price = 2.50*quantity;break;
            case `apple`:price = 1.20*quantity;break;
            case `orange`:price = 0.85*quantity;break;
            case `grapefruit`:price = 1.45*quantity;break;
            case `kiwi`:price = 2.70*quantity;break;
            case `pineapple`:price = 5.50*quantity;break;
            case `grapes`:price = 3.85*quantity;break;
            default:isError=true;
                break;
        }
 
    }
 
    else if( dayOfWeek===`Saturday` || dayOfWeek===`Sunday`)
    {
        switch (product) {
            case `banana`:
                price = 2.70*quantity;
                break;
            case `apple`:
                price = 1.25*quantity;
                break;
            case `orange`:
                price = 0.90*quantity;
                break;
            case `grapefruit`:
                price = 1.60*quantity;
                break;
            case `kiwi`:
                price = 3.00*quantity;
                break;
            case `pineapple`:
                price = 5.60*quantity;
                break;
            case `grapes`:
                price = 4.20*quantity;
                break;
            default:isError=true;
                break;
        }
    }
    else
    {
        isError=true;
    }

    
    if(!isError)
    {
        console.log(price.toFixed(2));
    }
else
    {
        console.log(`error`);
    }
 
 
 
}