
const serverUrl = process.env.REACT_APP_SERVER_URL_DEV
const httpService = {
    async postData(url, data){
        const response = await fetch(serverUrl + url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin', 
            headers: {
            'Content-Type': 'application/json'
            },
            redirect: 'follow', 
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify(data) 
        });
        return response.json();
    },
    async getData(url) {
        const response = await fetch(serverUrl + url, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
            'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer'
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }
}

export default httpService;