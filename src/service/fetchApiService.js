export default function fetchApiService(urlToFetch){
       return fetch(urlToFetch)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                throw response;
            })
}