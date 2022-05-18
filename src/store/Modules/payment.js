const state = {
   paystackDetail: {
      PUBLIC_KEY: "pk_test_921bb831048f1cc0bb9e291f193d8ab0106613c2",
      close: () => { console.log("Closed payment portal -_-"); }
   }

}

const getters = {
   get_paystack_details: (state) => state.paystackDetail
}

const mutations = {
   update_paystack_detail: (state, payload) => state.paystackDetail = payload
}

const actions = {
   processPayment({ getters }, payload){
      //on succesful payment, create the order and send to the server
      let order = {
         videos:getters.Carts,
         customerId: getters.getUserDetail._id,
         total: getters.getTotal,
         paystackReference: payload.reference,
         shippingMode: getters.getShippingFee == 10 ? 'Fast' : 'Standard',
         shippingFee: getters.getShippingFee
      };
      console.log(order)
      //send the order to the database on successful//
   }   
}

export default {
     state,
     getters,
     mutations,
     actions
}