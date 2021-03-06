
const serverUrl = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_SERVER_URL_DEV  : process.env.REACT_APP_SERVER_URL_PROD
const protocol = process.env.NODE_ENV !== 'development' ? "https://" : "http://"
const apiKey = process.env.REACT_APP_SERVER_API_KEY
const httpService = {
    async postData(url, data){
        const response = await fetch(protocol+ serverUrl + url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
            'Content-Type': 'application/json',
            'x-functions-key': apiKey
            },
            redirect: 'follow', 
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify(data) 
        });
        await returnResponse(response);
    },
    async getData(url) {
        const response = await fetch(protocol + serverUrl + "/api"+ url, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
            'Content-Type': 'application/json',
            'x-functions-key': apiKey
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer'
        });
        return await returnResponse(response);
    }
}

async function returnResponse(response) {
    if (response.status >= 200 && response.status <= 299) {
        let jsonResponse = {};
        try
        {
            jsonResponse = await response.json();
        }
        finally{
            return jsonResponse;
        }
        
    } else {
        throw Error(response.statusText);
    }
}

export default httpService;

