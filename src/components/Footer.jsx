import {
  FaInstagram, FaWhatsapp, FaTwitter, FaTiktok, FaLinkedin, FaYoutube,
} from "react-icons/fa";
import logo from "../assets/logo-new.png";
import { Link } from "react-router-dom";

const services = [
  "Laboratory Test", "Interpret Test Results", "Discuss Results with Doctor",
  "Pathologist Consultation", "7-day Holter ECG", "24hr Holter ECG",
  "Heart Check Service", "CT Scan", "MRI", "X-ray",
  "Echocardiogram", "Ultrasound Scan",
];

const company = [
  { name: "About Us", path: "/about-us" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact-us" },
];

const socials = [
  { Icon: FaWhatsapp, href: "https://wa.me/2349153847999?text=Hello%20Caremed%20Connect", label: "WhatsApp" },
  { Icon: FaInstagram, href: "https://www.instagram.com/caremedconnect", label: "Instagram" },
  { Icon: FaTwitter, href: "https://twitter.com/caremedng", label: "Twitter" },
  { Icon: FaTiktok, href: "https://www.tiktok.com/@caremedng", label: "TikTok" },
  { Icon: FaLinkedin, href: "#", label: "LinkedIn" },
  { Icon: FaYoutube, href: "#", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 font-outfit">
      {/* Main Footer */}
      <div className="w-[90%] max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/">
              <img src={logo} alt="CareMed Connect" className="h-14 w-auto object-contain mb-4 bg-white rounded-xl p-2" />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Connecting you to quality healthcare — fast, affordable, and stress-free.
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-customBlue flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="text-base" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Services</h4>
            <ul className="space-y-2">
              {services.slice(0, 8).map((item) => (
                <li key={item}>
                  <Link to={`/bookings?service=${encodeURIComponent(item)}`} className="text-sm hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-2">
              {company.map(({ name, path }) => (
                <li key={name}>
                  <Link to={path} className="text-sm hover:text-white transition-colors">{name}</Link>
                </li>
              ))}
              {["Press", "Careers", "Privacy Policy", "Terms of Use"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-400">No. 5 Tokunbo Alli Street, Off Toyin Street, Ikeja, Lagos</li>
              <li>
                <a href="https://wa.me/2348077779098" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  📞 08077779098
                </a>
              </li>
              <li>
                <a href="mailto:info@caremedconnect.com" className="hover:text-white transition-colors">
                  ✉️ info@caremedconnect.com
                </a>
              </li>
              <li>
                <a href="https://www.caremedconnect.com" className="hover:text-white transition-colors">
                  🌐 www.caremedconnect.com
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="https://caremedconnect.continuouscare.io/secure/registration/?lang=en_US"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2.5 bg-customBlue text-white text-sm font-semibold rounded-lg hover:bg-blue-800 transition-colors"
              >
                Book a Service →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="w-[90%] max-w-7xl mx-auto py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} CareMed Connect. All rights reserved.</span>
          <span>People · Technology · Better Health</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
