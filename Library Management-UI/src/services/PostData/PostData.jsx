export function PostData(type, userData) {
    let BaseURL = 'http://178.128.165.237/php/maple/api/';
    //let BaseURL = 'http://localhost/PHP-Slim-Restful/api/';
    var hdrs = {};
   
    hdrs["Authorization"] = sessionStorage.getItem('sessionId');
  

    var token = sessionStorage.getItem('sessionId');
     console.log("check "+ token);
    return new Promise((resolve, reject) =>{

        console.log(userData);
        fetch(BaseURL+type, {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: new Headers({
                Authorization: token,
            })

        })

            .then((response) => response.json())

            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                //reject(error);
                console.log(error);
            });


    });


}

