export default {
    login : user => {
        return fetch('/user/login', {method:"post", body: JSON.stringify(user), headers:{'Content-Type' : 'application/json'}})
                .then(res => {
                    if(res.status !== 401)
                        return res.json().then(data => data)
                    else
                        return {isAuthenticated:false, user : {username: ""}}
                });
    },
    register : user => {
        return fetch('/user/register', {method:"post", body: JSON.stringify(user), headers:{'Content-Type' : 'application/json'}})
                .then(res => res.json())
                .then(data => data)
    },
    logout : ()=>{
        return fetch('/user/logout')
                .then(res => res.json())
                .then(data => data);
    },
    isAuthenticated : async () => {
        const res = await fetch('/user/authenticated');
        if (res.status !== 401) {
            const data = await res.json();
            return data;
            // return res.json().then(data => data);
        }

        else
            return { isAuthenticated: false, user: { username: "" } };
    }
}
