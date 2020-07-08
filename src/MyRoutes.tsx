import {MainPage} from "./pages/MainPage";
import {AboutPage} from "./pages/AboutPage";
import {ProfilePage} from "./pages/ProfilePage";
import {RatingPage} from "./pages/RatingPage";

export const MyRoutes:any[]  = [
    {path: "/",               caption: "Главная", component: MainPage},
    {path: "/about",          caption: "Об игре", component: AboutPage},
    {path: "/profile/:id",    caption: "Профиль", component: ProfilePage},
    {path: "/rating",         caption: "Рейтинг", component: RatingPage},
]