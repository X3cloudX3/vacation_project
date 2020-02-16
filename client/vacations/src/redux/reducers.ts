import Actions from "./action.config";


const initialState = {
    vacations: [],
};

export default function root(state = initialState, action: any) {
    switch (action.type) {
        case Actions.SAVE_USER: {
            return {
                ...state,
                users: action.payload,

            };
        }

        case Actions.SET_VACATIONS: {
            return { ...state, vacations: action.payload }
        }

        case Actions.GET_VACATIONS_SUCCESS: {

            return {
                ...state,
                vacations: action.payload,
                countriesLoading: false
            };
        }

        case Actions.GET_VACATIONS_PENDING: {
            return { ...state, countriesLoading: true };
        }

        case Actions.GET_VACATION_SUCCESS: {

            return {
                ...state,
                vacationToChange: action.payload,

            };
        }

        default: {
            return state;
        }
    }
}