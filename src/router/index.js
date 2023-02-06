import CalculatorVue from "../components/CalculatorVue.vue";
import ContactForm from '../components/ContactForm.vue';
import DigitalClock from '../components/DigitalClock.vue';
import EventsCard from '../components/EventsCard.vue';
import FlipClock from '../components/FlipClock.vue';
import HotSpot from '../components/HotSpot.vue';
import ModalImage from '../components/ModalImage.vue';
import PasswordStrengthMeter from '../components/PasswordStrengthMeter.vue';
import PopupForm from '../components/PopupForm.vue';
import PreLoader from '../components/PreLoader.vue';
import SearchFilter from '../components/SearchFilter.vue';
import SideBar from '../components/SideBar.vue';
import SignupForm from '../components/SignupForm.vue';
import TabMenu from '../components/TabMenu.vue';
import ToDo from '../components/ToDo.vue';
import VueGallery from '../components/VueGallery.vue';
import WeatherApi from '../components/WeatherApi.vue';

export const routes = [
    { path: '/calculator', component: CalculatorVue},
    { path: '/contact-form', component: ContactForm},
    { path: '/digital-clock', component: DigitalClock},
    { path: '/events-card', component: EventsCard},
    { path: '/flip-clock', component: FlipClock},
    { path: '/hot-spot', component: HotSpot},
    { path: '/modal-image', component: ModalImage},
    { path: '/password-strength-master', component: PasswordStrengthMeter},
    { path: '/pop-up-form', component: PopupForm},
    { path: '/pre-loader', component: PreLoader},
    { path: '/search-filter', component: SearchFilter},
    { path: '/side-bar', component: SideBar},
    { path: '/sign-up-form', component: SignupForm},
    { path: '/tab-menu', component: TabMenu},
    { path: '/to-do', component: ToDo},
    { path: '/vue-gallery', component: VueGallery},
    { path: '/weather-api', component: WeatherApi},
];

export default routes;


