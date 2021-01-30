//+ click
const firstBtn= document.getElementById('firstBtnPlus');
var clickCount= 0;
firstBtn.addEventListener('click', function(event){
    console.log('Plus Clicked')
    clickCount = clickCount+1;

    //increase
    document.getElementById('firstClass').value= clickCount;
    //Get Latest Value
    const FirstClass=document.getElementById('firstClass').value
    var FirstClassNumber=parseFloat(FirstClass);
    //console.log('latest value', FirstClassNumber);


     //Update Subtotal
     const subTotal= document.getElementById('subtotal').innerText;
     const subTotalNumber= parseFloat(subtotal);
     var latestSubTotal= suboTotalNumber+150;
     document.getElementById('subtotal').innerText= latestSubTotal;

     //Update Subtotal Function
      

      //Update VAT
      const Vat= document.getElementById('vat').innerText;
      const VatNumber= parseFloat(Vat);
      var latestVat= latestSubTotal* (.1);
      document.getElementById('vat').innerText=latestVat;

      //Update Total
      const total= document.getElementById('total').innerText;
      const totalNumber= parseFloat(total);
      var latestTotal= latestSubTotal + latestVat;
      document.getElementById('total').innerText= latestTotal;



})

// - Click
const firstBtnMinus= document.getElementById('firstBtnMinus');
 var clickCountMinus=0;
firstBtnMinus.addEventListener('click', function(event){
    console.log('Minus clicked');

    //decrease
    const firstClass=document.getElementById('firstClass').value
    const firstClassNumber=parseFloat(firstClass);
    console.log(firstClassNumber);
    if(firstClassNumber>0){
        clickCountMinus= firstClassNumber-1;
        document.getElementById('firstClass').value=clickCountMinus;
        // Get Latest Value
        const FirstClass=document.getElementById('firstClass').value
        var FirstClassNumber=parseFloat(FirstClass);

         //Update Subtotal
     const subTotal= document.getElementById('subtotal').innerText;
     const subTotalNumber= parseFloat(subtotal);
     var latestSubTotal= subotalNumber-150;
     document.getElementById('subtotal').innerText= latestSubTotal;

      //Update VAT
      const Vat= document.getElementById('vat').innerText;
      const VatNumber= parseFloat(Vat);
      var latestVat= latestSubTotal* (.1);
      document.getElementById('vat').innerText=latestVat;

      //Update Total
      const total= document.getElementById('total').innerText;
      const totalNumber= parseFloat(total);
      var latestTotal= latestSubTotal + latestVat;
      document.getElementById('total').innerText= latestTotal;


    }
    else{
        document.getElementById('firstClass').value="0";
    }
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
     const subTotal= document.getElementById('subtotal').innerText;
     const subTotalNumber= parseFloat(subTotal);
     var latestSubTotal= subTotalNumber+100;
     document.getElementById('subtotal').innerText= latestSubTotal;
      //Update VAT
      const Vat= document.getElementById('vat').innerText;
     const VatNumber= parseFloat(Vat);
     var latestVat= latestSubTotal* (.1);
     document.getElementById('vat').innerText=latestVat;
      //Update Total
      const total= document.getElementById('total').innerText;
     const totalNumber= parseFloat(total);
     var latestTotal= latestSubTotal + latestVat;
     document.getElementById('total').innerText= latestTotal;
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
          const subTotal= document.getElementById('subtotal').innerText;
          const subTotalNumber= parseFloat(subTotal);
          var latestSubTotal= subTotalNumber-100;
          document.getElementById('subtotal').innerText= latestSubTotal;

          //Update VAT
          const Vat= document.getElementById('vat').innerText;
          const VatNumber= parseFloat(Vat);
          var latestVat= latestSubTotal* (.1);
          document.getElementById('vat').innerText=latestVat;

          //Update Total
          const total= document.getElementById('total').innerText;
          const totalNumber= parseFloat(total);
          var latestTotal= latestSubTotal + latestVat;
          document.getElementById('total').innerText= latestTotal;    
      } 
      else {
          document.getElementById('economyClass').value="0";
          
      }

  })
