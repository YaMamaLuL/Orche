import axios from "axios"

const LogInButtonHandler = (login: string, password: string) => {
    const cancelledMailChars = new RegExp("^[a-zA-Z0-9]+@\\S+$");
    const cancelledPassChars = new RegExp("[^*,^?, ^#,^<,^>,^%,^@,^\\/]")

    if (cancelledMailChars.test(login) &&
        cancelledPassChars.test(password) &&
        password.length > 6){
        console.log("zasadil")
    }
}

export default LogInButtonHandler