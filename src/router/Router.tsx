import { Route, Routes, useLocation } from "react-router-dom";
import { LoggedUser } from "../layouts/LoggedUser/LoggedUser";
import { useEffect, useState } from "react";
import { SignIn } from "../pages/SignIn/SignIn";
import { LoggedOut } from "../pages/LoggedOut/LoggedOut";
import { NotFound } from "../pages/NotFound/NotFound";

export const Router = () => {
  const [atualLocation, setAtualLocation] = useState<string>("*");
  //const { isAuthenticated } = useAuthentication();
  const location = useLocation();

  useEffect(() => {
    setAtualLocation(location.pathname);
  }, [atualLocation]);
/*
  useEffect(() => {
    if (isAuthenticated) {
      setAtualLocation("/loggedout");
    }else{
      setAtualLocation("/signin");
    }
  }, [isAuthenticated]);
*/
  return (
    <Routes>
      <Route path="*" element={<NotFound />}/>
      <Route path="/" element={<LoggedUser />}/>

      <Route path="/signin" element={<SignIn />} />
      <Route path="/overview" element={<LoggedOut />} />
    </Routes>
  );
};
