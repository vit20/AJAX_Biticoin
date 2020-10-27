'use strict';


$( function() {
    console.log("Działa");
});

let buy = $(".buy");
let sell = $(".sell");
let btn = $(".btn");


btn.click( getCurrency);
    
function getCurrency() {
     $.getJSON(
        "https://blockchain.info/pl/ticker",
        function (data){
       
        let beforeBuy = parseFloat(buy.html());
        let beforeSell = parseFloat(sell.html());

        let afterBuy = data.PLN.buy;
        let afterSell = data.PLN.sell;

        buy.html(afterBuy);
        sell.html(afterSell);
        
        if (beforeBuy < afterBuy) {
        console.log("zwiekszylo sie");
        $(".arrow-buy").html(`<i class="fas fa-long-arrow-alt-up green" ></i>`)
                    
        } else if ( beforeBuy === afterBuy) {
        console.log("taki sam");
        $(".arrow-buy").html(`<i class="fas fa-minus blue"></i>`)

        } else {
        console.log("zmniejszylo się");
        $(".arrow-buy").html(`<i class="fas fa-long-arrow-alt-down red"></i>`)
        };


        if (beforeSell < afterSell) {
         console.log("zwiekszylo sie");
         $(".arrow-sell").html(`<i class="fas fa-long-arrow-alt-up green" ></i>`)
                        
        } else if ( beforeSell === afterSell) {
        console.log("taki sam");
        $(".arrow-sell").html(`<i class="fas fa-minus blue" ></i>`)
    
        } else {
        console.log("zmniejszylo się");
        $(".arrow-sell").html(`<i class="fas fa-long-arrow-alt-down red"></i>`)
        };
        
    })
}  

        
        
    