import React, { useContext, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../authContext/AuthContext';
import useRefresh from '../customHooks/useRefresh';

const Owner = () => {
    const [loading, setLoading] = useState(true);
    const { auth, setAuth } = useContext(AuthContext);
    const refresh = useRefresh();
    const navigate = useNavigate();

    useEffect(() => {
        let isMounted = true;

        const verifyRefreshToken = async () => {
            try {
                if (!auth?.accessToken) {
                    await refresh();
                }
            } catch (error) {
                console.error("Token verification failed:", error?.response?.data?.message || error.message);
                setAuth({});
                navigate("/auth/login", { replace: true });
            } finally {
                isMounted && setLoading(false);
            }
        };

        verifyRefreshToken();
        return () => isMounted = false;
    }, []);

    return (
        <div>
            {loading ? (
                <div className="flex items-center justify-center h-screen">
                    <div>Loading...</div>
                </div>
            ) : (
                <Outlet />
            )}
        </div>
    );
};

export default Owner;