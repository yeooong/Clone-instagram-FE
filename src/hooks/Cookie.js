// const setCookie = (name, value, exp) => {
//     const date = new Date();
//     date.setTime(date.getTime() + exp*24*60*60*1000);
//     document.cookie = name + '=' + value + ';expires' + date.toUTCString() + ';path=/';
// };

// const getCookie = (name) => {
//     const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
//     return value? value[2] : null;
// };

// const deleteCookie = (name) => {
//     document.cookie = name + '=; expires=Thu, 01 Jan 2000 00:00:10 GMT;';
// }