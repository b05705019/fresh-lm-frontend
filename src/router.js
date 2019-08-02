import InputInfo from './components/InputInfo';
import PageNotFound from './components/PageNotFound';
import Play from './components/Play';
import Point from './components/Point';
import Ranking from './components/Ranking';
import Rule from './components/Rule';

const routes = [
    { path: '/', redirect: '/Point' },
    { path:'/Point', component: Point },
    { path: '/Rule', component: Rule },
    { path: '/InputInfo', component: InputInfo },
    { path: '/Play', component: Play },
    { path: '/Ranking', component: Ranking },
    { path: '*', component: PageNotFound }
];

export default routes;