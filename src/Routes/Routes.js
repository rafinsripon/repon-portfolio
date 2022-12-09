import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import About from "../Pages/About/About";
import Testimonial from "../Pages/About/Testimonial/Testimonial";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Projects/Projects/Projects";
import Resume from "../Pages/Resume/Resume/Resume";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/resume',
                element: <Resume />
            },
            {
                path: '/tesnimonial',
                element: <Testimonial />
            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }
])