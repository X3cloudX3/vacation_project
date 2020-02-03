import axios from "axios";

export const getCountriesService = async () => {
    console.log("service");

    try {
        const { data } = await axios.get("http://localhost:3200/vacation/allvacations");
        console.log(data);

        return data;
    } catch (ex) {
        return []
    }

}

export const registerRequest = async (formData: any, props: any) => {
    try {
        const { data } = await axios.post("http://localhost:3200/auth/register", {
            ...formData
        });
        const { redirect } = data
        if (redirect) {
            props.history.push('/login')
        }
    } catch (error) {
        console.log('fetch errr', error.message);
        alert(error.response.data.err)
    }
};

export const loginRequest = async (formData: any, props: any) => {
    try {
        const { data } = await axios.post("http://localhost:3200/auth/login", {
            ...formData
        });
        localStorage.setItem('userAuth', data.token)
        props.history.push('/vacations')

    } catch (error) {
        console.log('fetch errr', error.message);
        alert(error.response.data.err)

    }
};


export const getVacationService = async (id: number) => {
    console.log("service");

    try {
        const { data } = await axios.post("http://localhost:3200/vacation/singleVacation", {
            id

        });
        console.log(data);
        return data.result[0]
    } catch (error) {
        console.log('fetch errr', error.message);


    }

}