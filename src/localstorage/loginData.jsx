export const setLocalStorage = () => {
    localStorage.setItem("loginData",JSON.stringify([]));
}

export const getLocalStorage = () => {
    const loginData = JSON.parse(localStorage.getItem("loginData"));
    return loginData;
}