// Import Layots
import LayoutAdmin from '../layouts/LayoutAdmin';
// import LayoutPublic from '../layouts/LayoutPublic';

// Import Pages
import AdminHome from '../pages/Admin';
import AdminSingIn from '../pages/Admin/Signin';

const routes = [
    {
        path: "/admin",
        component: LayoutAdmin,
        exact: false,
        routes: [
            {
                path: "/admin",
                component: AdminHome,
                exact: true
            },
            {
                path: "/admin/login",
                component: AdminSingIn,
                exact: true
            }
        ]
    }
];

export default routes;





