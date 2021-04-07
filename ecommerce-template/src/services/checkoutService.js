import httpService from './httpService';

const checkoutService = {
    async completeCheckout(data){
        let response;
        try
        {
             response = await httpService.postData('/completeOrder', data);
        }
        catch(error)
        {
            console.error("Can't complete the order: " + error);
            return null;
        }
        finally
        {
            return response;
        }
        
    }
}

export default checkoutService;