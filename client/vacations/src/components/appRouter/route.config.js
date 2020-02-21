import React from "react"
import login from "../pages/login";
import register from "../pages/register";
import adminVacations from "../pages/adminVacations"
import vacations from "../pages/vacations"
import { withAuth } from "../hoc/auth"

export const routes = [
    { exact: true, isVisible: false, title: "register", path: "/register", component: register },
    { exact: true, isVisible: false, title: "login", path: "/login", component: login },

    {
        exact: true, isVisible: true, title: "Vacations", path: "/vacations", component: (props) => {
            const VacationsWithAuth = withAuth(vacations, adminVacations);
            return <VacationsWithAuth {...props} />
        }
    }
]