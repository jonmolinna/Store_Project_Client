import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import useRefreshToken from "../modules/auth/hooks/useRefreshToken";
import { RootState } from "../store";


const PersistToken = () => {
  const [loading, setLoading] = useState(true);
  const refresh = useRefreshToken();
  const { token } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.log("ERROR ---> ", err);
      } finally {
        setLoading(false);
      }
    };

    !token ? verifyRefreshToken() : setLoading(false);

  }, []);

  return (
    <React.Fragment>
        {
            loading ? <p>Cargando ... </p> : <Outlet />
        }
    </React.Fragment>
  );
};

export default PersistToken;
