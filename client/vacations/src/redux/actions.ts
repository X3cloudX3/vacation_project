import Actions from "./action.config";

import { getCountriesService, getVacationService } from "./service";

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
    console.log(vacation,'changeAction');
    
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

// async action
export const getVacations = () => {
    console.log("getVacation");

    return async (dispachFn: Function) => {
        console.log("dispatch");

        // dispachFn(getVacationsPending());
        const vacations = await getCountriesService();
        console.log(vacations)

        dispachFn(getVacationsSuccess(vacations));
    };
};

export const changeVacations = (id: number) => {
    console.log("changeVacation");

    return async (dispachFn: Function) => {
        console.log("dispatch");

        // dispachFn(getVacationsPending());
        const vacation = await getVacationService(id);
        console.log(vacation)

        getVacationSuccess(vacation)
    };
};
