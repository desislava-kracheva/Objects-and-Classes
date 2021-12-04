// Judge - 20/100 - не е решена правилно.
function solveSecondTime (stock, ordered){

        let obj ={};
    
    for(let i = 0; i< stock.length; i++){
    if(i % 2 !== 0){
    
    obj[stock[i-1]] = Number(stock[i])
    
    }
    
    }
    
    for(let i =0; i< ordered.length; i++){
    
       if(i % 2 !==0 ){
    
        if(obj.hasOwnProperty(ordered[i-1])){
            obj[ordered[i-1]] += Number(ordered[i])
    
        }else{
    
            obj[ordered[i-1]] = Number[ordered[i]]
        }
       } 
    }
    
    for(let key of Object.keys(obj)){
    
        console.log(`${key} -> ${Number(obj[key])}`);
    }
    
    }

    solveSecondTime([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
        ],
        [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
        ]
        )