import Landing from "../screens/Landing";
import About from "../screens/About";
import Services from "../screens/Services";
import Contact from "../screens/Contact";
import Bookings from "../screens/Bookings";
import Blog from "../screens/Blog";
import BlogPost from "../screens/Blog/BlogPost";
import AmuwoMCC from "../screens/Partnerships";

const Paths = [
  { path: "/", element: <Landing /> },
  { path: "/about-us", element: <About /> },
  { path: "/services", element: <Services /> },
  { path: "/contact-us", element: <Contact /> },
  { path: "/bookings", element: <Bookings /> },
  { path: "/blog", element: <Blog /> },
  { path: "/blog/:slug", element: <BlogPost /> },
  { path: "/partnerships/amuwo-mcc", element: <AmuwoMCC /> },
];

export default Paths;
