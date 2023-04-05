export const setCookie = (name, value, exp) => {
    const date = new Date();
    date.setTime(date.getTime() + exp*12*60*60*1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
};

export const deleteCookie = (name) => {
    document.cookie = name + '=; expires=Thu, 01 Jan 2000 00:00:10 GMT;';
}