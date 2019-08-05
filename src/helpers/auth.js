const auth = {
    checkAuth: function(){
        let user = JSON.parse(localStorage.getItem('auth'));

        if (user && user.token) {
            return { 'Authorization': 'Basic ' + user.token };
        } else {
            return {};
        }
    }
};

module.exports = auth;