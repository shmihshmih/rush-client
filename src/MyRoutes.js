import {MainPage} from "./pages/MainPage/MainPage";
import {AboutPage} from "./pages/AboutPage/AboutPage";
import {RatingPage} from "./pages/RatingPage/RatingPage";
import {SoloQuestPage} from "./pages/QuestsPage/QuestsPage";
import {QuestPage} from "./pages/QuestPage/QuestPage";

export const MyRoutes = [
  {path: "/",            caption: "Главная",     component: MainPage},
  {path: "/about",       caption: "О проекте",   component: AboutPage},
  {path: "/rating",      caption: "Рейтинг",     component: RatingPage},
  {path: "/solo/",        caption: "Соло-квесты", component: SoloQuestPage}
]