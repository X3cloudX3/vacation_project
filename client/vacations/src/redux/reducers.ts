import Actions from "./action.config";

// const imagesCountries: { [key: string]: any[] } = {};
const initialState = {
    vacations: [],
    users: [],
    vacationToChange: []
};

export default function root(state = initialState, action: any) {
    switch (action.type) {
        case Actions.SAVE_USER: {
            // return equals to global set state - setting the store
            return {
                ...state,
                users: action.payload,

            };
        }

        // deprecated in version 24.10.209
        case Actions.GET_VACATIONS: {
            // some logic
            return {
                ...state,
                countries: ["ISR", "AFG"]
            };
        }

        // case Actions.GET_VACATIONS: {
        //     // some logic
        //     return {
        //         ...state,
        //         countries: ["ISR", "AFG"]
        //     };
        // }

        // case Actions.SAVE_IMAGES_ACTION: {
        //     const { code, image } = action.payload;
        //     const { imagesCountries } = state;
        //     const isCodeExist = imagesCountries.hasOwnProperty(code);
        //     return {
        //         ...state,
        //         imagesCountries: {
        //             ...imagesCountries,
        //             [code]: isCodeExist ? [...imagesCountries[code], image] : [image]
        //         }
        //     };
        // }

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