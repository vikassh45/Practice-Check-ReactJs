

class AuthenticationService {

    registerSuccessfulLogin(userid, password) {
        console.log("register successful login")
        sessionStorage.setItem("AuthenticatedUser", userid)
    }

    logout() {
        sessionStorage.removeItem('AuthenticatedUser')
        
    }

    isUserLoggedin() {
        let user = sessionStorage.getItem('AuthenticatedUser')
        if (user === null) return false;
        return true;
    }
    getUserIdLoggedin() {
        let userid=sessionStorage.getItem('AuthenticatedUser')
        return userid;
    }

}
export default new AuthenticationService();