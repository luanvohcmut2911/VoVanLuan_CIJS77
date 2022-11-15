import { createContext } from "react";

const defaultValue = {
    vietnamese: {
        login: 'Đăng nhập',
        username: 'Tên đăng nhập',
        welcome: 'Xin chào '
    },
    english:{
        login: 'Login',
        username: 'Username',
        welcome: 'Welcome '
    },
    japanese:{
        login: 'ログイン',
        username: 'ユーザー名',
        welcome: 'いらっしゃいませ'
    }
    // login: 'login',
    // username: 'username'
};
export const LanguageContext = createContext(defaultValue);