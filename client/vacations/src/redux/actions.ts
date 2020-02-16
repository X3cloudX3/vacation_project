import Actions from "./action.config";

import { getCountriesService } from "./service";

// export const saveUserAction = (user: any) => {
//     return {
//         type: Actions.SAVE_USER,
//         payload: { user }
//     };
// };

// interface Country {
//     name: string,
//     flag: string,
//     population: number
// }
// sync action to reducer
export const getVacationsSuccess = (vacations: Array<object>) => {
    return {
        type: Actions.GET_VACATIONS_SUCCESS,
        payload: vacations
    };
};

export const getVacationSuccess = (vacation: object) => {
    console.log(vacation, 'changeAction');

    return {
        type: Actions.GET_VACATION_SUCCESS,
        payload: vacation
    };
};

// export const saveImageAction = (payload: any) => {
//     return {
//         type: Actions.SAVE_IMAGES_ACTION,
//         payload
//     };
// };

export const getVacationsPending = () => {
    return {
        type: Actions.GET_VACATIONS_PENDING
    };
};


export const setVacations = (vacations: any) => {
    return {
        type: Actions.SET_VACATIONS,
        payload: vacations,
    }
}

// async action
export const getVacations = () => {
    return async (dispachFn: Function) => {
        // dispachFn(getVacationsPending());
        const vacations = await getCountriesService();
        dispachFn(getVacationsSuccess(vacations));
    };
};

export const favoritAction = (vacation_id: number, user_id: number, selected: boolean) => {



    return async (dispachFn: Function) => {
        console.log(vacation_id, user_id, selected)

        // dispachFn(getVacationsPending());
        // const vacations = await getCountriesService();
        // dispachFn(getVacationsSuccess(vacations));

    };
};

