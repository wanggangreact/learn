
const headers = new Headers({
    "Accept": "application/json",
    "Content-Type": "application/json"
});


function get(url) {
    return fetch(url, {
        method: "GET",
        headers: headers
    }).then(res => {
        handleResponse(res);
    }).catch(err => error(url))
}

function post(url,data) {
    let params = {
        method: "POST",
        headers: headers
    }
    return fetch(url,params).then(err => error(url))
}

function handleResponse(url, res) {
    if (res.stauts === 200) {
        return res.json()
    } else {
        error(url);
    }
}

function error(url) {
    console.log(`request fali url = ${url}`);
    return Promise.reject({ error: {message: "server error"}})
}

export  { get, post }