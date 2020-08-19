import axios from "axios";

export default {
    getUsers: function() {
        console.log("Hola!")
        return axios.get("https://randomuser.me/api/?results=200&nat=gb")

    }
}