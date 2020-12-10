import httpService from './httpService';

const checkoutService = {
    async completeCheckout(data){
        const response = await httpService.postData('/completeOrder', data);
        return response;
    }
}

export default checkoutService;