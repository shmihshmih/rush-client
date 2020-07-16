import {MainPage} from "./pages/MainPage/MainPage";
import {AboutPage} from "./pages/AboutPage/AboutPage";
import {ProfilePage} from "./pages/ProfilePage/ProfilePage";
import {RatingPage} from "./pages/RatingPage/RatingPage";
import {SoloQuestPage} from "./pages/QuestsPage/QuestsPage";

export const MyRoutes = [
  {path: "/", caption: "Главная", component: MainPage},
  {path: "/about", caption: "О проекте", component: AboutPage},
  {path: "/profile/:id", caption: "Профиль", component: ProfilePage},
  {path: "/rating", caption: "Рейтинг", component: RatingPage},
  {path: "/solo", caption: "Соло-квесты", component: SoloQuestPage},
]