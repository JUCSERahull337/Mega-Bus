
//First Class(+)
const firstBtn= document.getElementById('firstBtnPlus');
var plusCount= 0;
firstBtn.addEventListener('click', function(event){
    console.log('Plus Clicked')
    const firstPlus= document.getElementById('firstClass').value;
    var firstPlusNumber=parseFloat(firstPlus);


    plusCount = firstPlusNumber+1;
    document.getElementById('firstClass').value= plusCount;         //increase
    //Get Latest Value
    // const FirstClass=document.getElementById('firstClass').value
    // var FirstClassNumber=parseFloat(FirstClass);
    // console.log('latest value', FirstClassNumber);


    //Update Subtotal
    // const subTotal= document.getElementById('subtotal').innerText;
    // const subTotalNumber= parseFloat(subTotal);
    // var latestSubTotal= subTotalNumber+150;
    // document.getElementById('subtotal').innerText= latestSubTotal;

    var latestSubTotal=UpdateSubTotal('subtotal',150);   //update subtotal Function
    document.getElementById('subtotal').innerText= latestSubTotal ;
    

    //Update VAT
    // const Vat= document.getElementById('vat').innerText;
    // const VatNumber= parseFloat(Vat);
    // var latestVat= latestSubTotal* (.1);
    // document.getElementById('vat').innerText=latestVat;

    var UpdatedVat= UpdateVAT(latestSubTotal);       //update vat function
    document.getElementById('vat').innerText=UpdatedVat;


    //Update Total
    // const total= document.getElementById('total').innerText;
    // const totalNumber= parseFloat(total);
    // var latestTotal= latestSubTotal + latestVat;
    var latestTotal= latestSubTotal + UpdatedVat;  //Updated Total 
    document.getElementById('total').innerText= latestTotal;





    //Capture input box & update
    //const firstClass=document.getElementById('firstClass').value;
    //const firstClassNumber= parseFloat(firstClass);
    //console.log(firstClassNumber)
    





})

 //Economy Class(+)
const ecoBtnPlus=document.getElementById('ecoBtnPlus');
var ecoPlusCount=0
ecoBtnPlus.addEventListener('click', function(event){
    console.log('Eco plus Clicked');
    const economyPlus= document.getElementById('economyClass').value;
    var economyPlusNumber=parseFloat(economyPlus);
    console.log(economyPlusNumber);
    var ecoPlusCount= economyPlusNumber+1;   //increment
    document.getElementById('economyClass').value= ecoPlusCount;

     //Update SUbtotal
    // const subTotal= document.getElementById('subtotal').innerText;
    // const subTotalNumber= parseFloat(subTotal);
    // var latestSubTotal= subTotalNumber+100;
    // document.getElementById('subtotal').innerText= latestSubTotal;

    var latestSubTotal=UpdateSubTotal('subtotal',100);   //update subtotal Function
    document.getElementById('subtotal').innerText= latestSubTotal ;

     //Update VAT
    //  const Vat= document.getElementById('vat').innerText;
    // const VatNumber= parseFloat(Vat);
    // var latestVat= latestSubTotal* (.1);
    // document.getElementById('vat').innerText=latestVat;

    var UpdatedVat= UpdateVAT(latestSubTotal);       //update vat function
    document.getElementById('vat').innerText=UpdatedVat;

     //Update Total
    //  const total= document.getElementById('total').innerText;
    // const totalNumber= parseFloat(total);
    // var latestTotal= latestSubTotal + latestVat;

    var latestTotal= latestSubTotal + UpdatedVat;  //Updated Total 
    document.getElementById('total').innerText= latestTotal;
    
})

 //First Class (-)
const firstBtnMinus= document.getElementById('firstBtnMinus');
 var clickCountMinus=0;
firstBtnMinus.addEventListener('click', function(event){
    console.log('Minus clicked');
    //Decrease
    const firstClass=document.getElementById('firstClass').value
    const firstClassNumber=parseFloat(firstClass);
    console.log(firstClassNumber);
    // const subTotal= document.getElementById('subtotal').innerText;
    //     const subTotalNumber= parseFloat(subTotal);
    //     console.log('subtotal',subTotalNumber);
    if(firstClassNumber>0){
        clickCountMinus= firstClassNumber-1;
        document.getElementById('firstClass').value=clickCountMinus;
        //get latest value
        // const firstMinusClass=document.getElementById('firstClass').value
        // var firstMinusClassNumber=parseFloat(firstMinusClass);
        // console.log("hello",firstMinusClass)

        //Update Subtotal
        // const subTotal= document.getElementById('subtotal').innerText;
        // const subTotalNumber= parseFloat(subTotal);
        // console.log('subtotal',subTotalNumber);
        // var latestSubTotal = subTotalNumber-150;
        // document.getElementById('subtotal').innerText= latestSubTotal;
        //console.log(plusCount)

        //update subtotal using Function
        var latestSubTotal=UpdateSubTotal('subtotal',(-1*150));   //update subtotal Function
        document.getElementById('subtotal').innerText= latestSubTotal ;

        //Update VAT
        // const Vat= document.getElementById('vat').innerText;
        // const VatNumber= parseFloat(Vat);
        // var latestVat= latestSubTotal* (.1);
        // document.getElementById('vat').innerText=latestVat;

        var UpdatedVat= UpdateVAT(latestSubTotal);       //update vat function
        document.getElementById('vat').innerText=UpdatedVat;


          //Update Total
        // const total= document.getElementById('total').innerText;
        // const totalNumber= parseFloat(total);
        // var latestTotal= latestSubTotal + latestVat;
        // document.getElementById('total').innerText= latestTotal;

        var latestTotal= latestSubTotal + UpdatedVat;  //Updated Total 
        document.getElementById('total').innerText= latestTotal;
    }
    else{
        document.getElementById('firstClass').value="0";
    }
})

//Economy Class (-)
const ecoBtnMinus= document.getElementById('ecoBtnMinus');
var ecoMinusCount=0;
ecoBtnMinus.addEventListener('click',function(event){
    console.log('Eco Minus Clicked');
    const economyMinus= document.getElementById('economyClass').value;
    var economyMinusNumber=parseFloat(economyMinus);
    if (economyMinusNumber>0) {
        var ecoMinusCount= economyMinusNumber-1;    //decrease
        document.getElementById('economyClass').value=ecoMinusCount;

        
     //Update SUbtotal
        // const subTotal= document.getElementById('subtotal').innerText;
        // const subTotalNumber= parseFloat(subTotal);
        // var latestSubTotal= subTotalNumber-100;
        // document.getElementById('subtotal').innerText= latestSubTotal;

        var latestSubTotal=UpdateSubTotal('subtotal',(-1*100));   //update subtotal Function
        document.getElementById('subtotal').innerText= latestSubTotal ;


        //Update VAT
        // const Vat= document.getElementById('vat').innerText;
        // const VatNumber= parseFloat(Vat);
        // var latestVat= latestSubTotal* (.1);
        // document.getElementById('vat').innerText=latestVat;

        var UpdatedVat= UpdateVAT(latestSubTotal);       //update vat function
        document.getElementById('vat').innerText=UpdatedVat;


        //Update Total
        // const total= document.getElementById('total').innerText;
        // const totalNumber= parseFloat(total);
        // var latestTotal= latestSubTotal + latestVat;
        // document.getElementById('total').innerText= latestTotal;
        
        var latestTotal= latestSubTotal + UpdatedVat;  //Updated Total 
        document.getElementById('total').innerText= latestTotal;
    } 
    else {
        document.getElementById('economyClass').value="0";
        
    }

})

function UpdateSubTotal(id,basePrice){
    const subTotal= document.getElementById(id).innerText;
    const subTotalNumber= parseFloat(subTotal);
    var latestSubTotal= subTotalNumber+basePrice;
    //document.getElementById(id).innerText= latestSubTotal;
    return latestSubTotal;

}

function UpdateVAT(latestSubTotal){
    const Vat= document.getElementById('vat').innerText;
    const VatNumber= parseFloat(Vat);
    var latestVat= latestSubTotal* (.1);
    //document.getElementById('vat').innerText=latestVat;
    return latestVat;
}

//Bonus Part
const bonusDiv=document.getElementById('confirmation');
bonusDiv.addEventListener('click', function(event){
    document.getElementById('bonusDiv').style.display='block'
    document.getElementById('main').style.display='none';
})

