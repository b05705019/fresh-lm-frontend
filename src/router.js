import Info from './components/Info';
import PageNotFound from './components/PageNotFound';
import Play from './components/Play';
import Play2 from './components/Play2';
import Point from './components/Point';
import Ranking from './components/Ranking';
import Rule from './components/Rule';
import Score from './components/Score';

const routes = [
    { path: '/', redirect: '/Point' },
    { path:'/Point', component: Point },
    { path: '/Rule', component: Rule },
    { path: '/Info', component: Info },
    { path: '/Play', component: Play },
    { path: '/Play2', component: Play2 },
    { path: '/Score', component: Score },
    { path: '/Ranking', component: Ranking },
    { path: '*', component: PageNotFound }
];

export default routes;