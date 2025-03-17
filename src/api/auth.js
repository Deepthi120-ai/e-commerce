import axios from "axios";

export const userLogin = async(email, password) => { //To authenticate user and obtain JWT tokens
    const url = 'https://api.escuelajs.co/api/v1/auth/login';
    try{
        const { data } = await axios.post(url, {
            email: email,
            password:password
        })
        console.log(data);
        return data;
    }catch(err){
        return err
    }
}