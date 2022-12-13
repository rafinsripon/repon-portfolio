import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import About from "../Pages/About/About";
import Testimonial from "../Pages/About/Testimonial/Testimonial";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import ProjectDetail from "../Pages/Projects/ProjectDetail/ProjectDetail";
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
                path: '/projectsDetail/:id',
                element: <ProjectDetail />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }
])