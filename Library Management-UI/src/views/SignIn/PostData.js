export function PostData(type, userData) {
    let BaseURL = 'http://178.128.165.237:8082/';
    //let BaseURL = 'http://localhost/PHP-Slim-Restful/api/';
    var hdrs = {};
    hdrs["Authorization"] = sessionStorage.getItem('sessionId');
    //alert("printing"+sessionStorage.getItem('sessionId'));

    var token = sessionStorage.getItem('sessionId');
    console.log(token+"id check");
    return new Promise((resolve, reject) =>{

        console.log(userData);
        fetch(BaseURL+type, {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: new Headers({
                Authorization: '${token}',
            })

        })

            .then((response) => response.json())

            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            });


    });


}

