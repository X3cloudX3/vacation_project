import Actions from "./action.config";

import { getCountriesService } from "./service";


export const setUser = (user: any) => ({
    type: Actions.SET_USER,
    payload: user
})

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


