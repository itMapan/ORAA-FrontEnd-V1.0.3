import { createContext, useContext, useState } from "react";
import secureLocalStorage from "react-secure-storage";

/* Set default state context */
const StateContext = createContext({
  CurrentUser: {},
  setCurrentUser: () => {},
});

/* Set context provider data */
export const ContextProvider = ({ children }) => {
  /* Set current user */
  const [CurrentUser, _setCurrentUser] = useState(
    secureLocalStorage.getItem("Sess") || ""
  );
  const setCurrentUser = (sessionData) => {
    if (sessionData) {
      secureLocalStorage.setItem("Sess", sessionData);
    } else {
      secureLocalStorage.removeItem("Sess");
    }
    _setCurrentUser(sessionData);
  };

  /* Set current AuthToken */
  const [UserToken, _setUserToken] = useState(
    secureLocalStorage.getItem("AuthToken") || ""
  );
  const setUserToken = (sessionData) => {
    if (sessionData) {
      secureLocalStorage.setItem("AuthToken", sessionData);
    } else {
      secureLocalStorage.removeItem("AuthToken");
    }
    _setUserToken(sessionData);
  };

  /* Set current user token id */
  const [UserTokenId, _setUserTokenId] = useState(
    secureLocalStorage.getItem("AuthTokenId") || ""
  );
  const setUserTokenId = (sessionData) => {
    if (sessionData) {
      secureLocalStorage.setItem("AuthTokenId", sessionData);
    } else {
      secureLocalStorage.removeItem("AuthTokenId");
    }
    _setUserTokenId(sessionData);
  };

  return (
    /* Global state context */
    <StateContext.Provider
      value={{
        CurrentUser,
        setCurrentUser,
        UserToken,
        setUserToken,
        UserTokenId,
        setUserTokenId,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

/* Config get/set global state context */
export const useStateContext = () => useContext(StateContext);
