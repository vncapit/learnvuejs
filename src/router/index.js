import CalculatorVue from "../components/CalculatorVue.vue";
import ContactForm from "../components/ContactForm.vue";
import DigitalClock from "../components/DigitalClock.vue";
import EventsCard from "../components/EventsCard.vue";
import FlipClock from "../components/FlipClock.vue";
import HotSpot from "../components/HotSpot.vue";
import ModalImage from "../components/ModalImage.vue";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter.vue";
import PopupForm from "../components/PopupForm.vue";
import PreLoader from "../components/PreLoader.vue";
import SearchFilter from "../components/SearchFilter.vue";
import SideBar from "../components/SideBar.vue";
import SignupForm from "../components/SignupForm.vue";
import TabMenu from "../components/TabMenu.vue";
import ToDo from "../components/ToDo.vue";
import VueGallery from "../components/VueGallery.vue";
import WeatherApi from "../components/WeatherApi.vue";

const routes = [
    { path: "/", component: ContactForm, name: "Contact Form" },
    { path: "/calculator", component: CalculatorVue, name: "Calculator" },
    { path: "/digital-clock", component: DigitalClock, name: "Digital Clock" },
    { path: "/events-card", component: EventsCard, name: "Events Card" },
    { path: "/flip-clock", component: FlipClock, name: "Flip Coundown" },
    { path: "/hot-spot", component: HotSpot, name: "Hotspot" },
    { path: "/modal-image", component: ModalImage, name: "Modal Image" },
    {
        path: "/password-strength-master",
        component: PasswordStrengthMeter,
        name: "Password Strength Meter",
    },
    { path: "/pop-up-form", component: PopupForm, name: "Popup Form" },
    { path: "/pre-loader", component: PreLoader, name: "Preloader" },
    { path: "/search-filter", component: SearchFilter, name: "Search Filter" },
    { path: "/side-bar", component: SideBar, name: "Side Bar" },
    { path: "/sign-up-form", component: SignupForm, name: "Signup Form" },
    { path: "/tab-menu", component: TabMenu, name: "Tab Menu" },
    { path: "/to-do", component: ToDo, name: "Todo List" },
    { path: "/vue-gallery", component: VueGallery, name: "Gallery" },
    { path: "/weather-api", component: WeatherApi, name: "WeatherAPI" },
];

export default routes;
