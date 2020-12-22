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
            console.error("Can't get the list of products: " + error);
        }
        finally
        {
            return response;
        }
        
    }
}

export default checkoutService;