import axios from "../components/axios/mainAxios";

export const getCountriesService = async () => {
    try {
        const { data } = await axios.get(`http://localhost:3200/vacation/allvacations`);
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


export const addToFav = async (vacation_id: number, user_id: number) => {
    try {
        await axios.post("http://localhost:3200/vacation/addToFavorites", {
            vacation_id, user_id
        });
    } catch (error) {
        console.log('fetch errr', error);
    }

};

export const removeFromFav = async (vacation_id: number, user_id: number) => {
    try {
        await axios.post("http://localhost:3200/vacation/removeFromFavorites", {
            vacation_id, user_id
        });
    } catch (error) {
        console.log('fetch errr', error);
    }

};