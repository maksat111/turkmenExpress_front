import { React, lazy, Suspense } from 'react';
import { useRoutes } from "react-router-dom";

const Navbar = lazy(() => import('../components/Navbar'));
const Footer = lazy(() => import('../components/Footer'));
const Category = lazy(() => import('../components/Category'));
const Home = lazy(() => import('../pages/home/Home'));
const Links = lazy(() => import('../pages/links/Links'));
const ProductDetails = lazy(() => import('../pages/product/ProductDetails'));
const Loading = lazy(() => import('../components/Loading'));
const LoadingSpin = lazy(() => import('../components/LoadingSpin'));
const ProductsCategory = lazy(() => import('../pages/productsCategory/ProductsCategory'));
const ProductsSubCategory = lazy(() => import('../pages/productsSubCategory/ProductsSubCategory'));

function Router() {
    let routes = useRoutes([
        {
            element: <Suspense fallback={<Loading size='60px' />}><Category /></Suspense>,
            children: [
                {
                    element: <Suspense fallback={<LoadingSpin size='60px' />}><Home /></Suspense>,
                    path: '/'
                },
                {
                    element: <Suspense fallback={<LoadingSpin size='60px' />}><ProductDetails /></Suspense>,
                    path: '/products/:id'
                },
                {
                    element: <Suspense fallback={<LoadingSpin size='60px' />}><ProductsCategory /></Suspense>,
                    path: '/category/:id'
                },
                {
                    element: <Suspense fallback={<LoadingSpin size='60px' />}><ProductsSubCategory /></Suspense>,
                    path: '/subcategory/:id'
                }
            ]
        },

    ]);
    return routes;
}

export default Router;