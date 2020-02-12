import axios from 'axios'

export const addToFav = async (id, userId) => {
    try {
        await axios.post("http://localhost:3200/vacation/addToFavorites", {
            id, userId
        });
    } catch (error) {
        console.log('fetch errr', error);
    }

};

export const removeFromFav = async (id, userId) => {
    try {
        await axios.post("http://localhost:3200/vacation/removeFromFavorites", {
            id, userId
        });
    } catch (error) {
        console.log('fetch errr', error);
    }

};

export const deleteRequest = async (id) => {
    try {
        await axios.post("http://localhost:3200/vacation/deleteVacation", {
            id
        });
    } catch (error) {
        console.log('fetch errr', error);
    }

};

export const addVacationRequest = async (formData) => {
    try {
        await axios.post("http://localhost:3200/vacation/addVacation", {
            ...formData
        });

        // setOpen(false)
    } catch (error) {
        console.log('fetch errr', error);
    }

};

export const editRequest = async (formData) => {
    try {
        await axios.post("http://localhost:3200/vacation/editVacation", {
            ...formData
        });

        // setOpen(false)
    } catch (error) {
        console.log('fetch errr', error);
    }

};