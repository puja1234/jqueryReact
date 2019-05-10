import React, { Component } from 'react';

class Home extends Component {
  
  componentDidMount() {
    const configJson = {
        'tarCall': false,
        'features': {
            'showPGResponseMsg': true,
            
            'enableNewWindowFlow': false    //for hybrid applications please disable this by passing false
        },
        
        //T319313|TXN18041921|100||123|8860640678|raj.k9732@gmail.com||||||||||5253374069ETIRJU
        "consumerData": {
"deviceId": "WEBSH2",
"token": "44b768001b05befdcf2f90bb33b19bedd62fe8ab3aa6226fd9e67ea1dc83ed89ce57d18d2fa7417db831b13634ec5e5e740b90c9e3460268031d90042497f450",
"returnUrl": "http://localhost:8081/ts-pay-pg-service/pg/tspS2SUrl",
"paymentMode": "all",
"merchantLogoUrl": "https://www.paynimo.com/CompanyDocs/company-logo-md.png",
"merchantId": "T319313",
"currency": "INR",
"consumerId": "11915382",
"consumerMobileNo": "8800330899",
"consumerEmailId": "",
"txnId": "TXN09051912",
"items": [
{
"itemId": "FIRST",
"amount": "1",
"comAmt": "0"
}
],
"customStyle": {
"SECONDARY_COLOR_CODE": "#FFFFFF",
"PRIMARY_COLOR_CODE": "#3977b7",
"BUTTON_COLOR_CODE_2": "#FFFFFF",
"BUTTON_COLOR_CODE_1": "#1969bb"
}
}
    }
    window.$('button').on('click', () => {
        window.$.pnCheckout(configJson);
        if(configJson.features.enableNewWindowFlow){
            // pnCheckoutShared.openNewWindow();
        }
    });
  }

  render() {
      
    return(
        <button>Click</button>
    );
  }
}

export default Home;
