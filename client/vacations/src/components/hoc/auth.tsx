import React, { useState, useEffect } from "react";
import mainAxios from "../axios/mainAxios"
import { Redirect } from "react-router-dom"
export const withAuth = (WrappedComponent: any) => {
    return function (props: any) {
        const [status, setStatus] = useState("loading");
        const [userId, setId] = useState(0);
        useEffect(() => {
            const verify = async () => {
                const result = await mainAxios.get("/auth/verify")
                const { status, userId } = result.data;
                setStatus(status)
                setId(userId)

            }
            verify();
        }, [])
        if (status === "loading") return <div className="loader"></div>
        if (!status) return <Redirect to="/login" />
        console.log(userId);

        return <WrappedComponent {...props} id={userId} />
    }
}