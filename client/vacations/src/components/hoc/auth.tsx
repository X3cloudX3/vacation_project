import React, { useState, useEffect } from "react";
import mainAxios from "../axios/mainAxios"
import { Redirect } from "react-router-dom"
export const withAuth = (WrappedComponentVacation: any, WrappedComponentAdmin: any) => {
    return function (props: any) {
        const [status, setStatus] = useState("loading");
        const [userId, setId] = useState(0);
        const [admin, setAdmin] = useState(false);
        useEffect(() => {
            const verify = async () => {
                const result = await mainAxios.get("/auth/verify")
                const { status, userId, admin } = result.data;
                setStatus(status)
                setId(userId)
                setAdmin(admin);
            }
            verify();
        }, [])
        if (status === "loading") return <div className="loader"></div>
        if (!status) return <Redirect to="/login" />
        if (!admin) return <WrappedComponentVacation {...props} id={userId} />
        return <WrappedComponentAdmin {...props} />
    }
}