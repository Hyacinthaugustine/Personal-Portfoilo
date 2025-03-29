import MobileNavigation from "../../../components/Mobile-Navigation";

const NavigationRoutes = () => {
  const navItems = [
    { id: "hero", label: "Home" },
    { id: "features", label: "Features" },
    { id: "portfolio", label: "Portfolio" },
    { id: "resume", label: "Resume" },
    { id: "testimonial", label: "Testimonials" },
    { id: "clients", label: "Clients" },
    { id: "blogs", label: "Blogs" },
    { id: "contacts", label: "Contact" },
  ];

  return (
    <nav className="ml-4 ">
      <ul className="hidden md:flex space-x-4 text-sm">
        {navItems.map(({ id, label }) => (
          <li key={id} className="cursor-pointer">
            <button
              className="px-3 py-2 uppercase hover:text-blue-500 transition"
              onClick={() =>
                document
                  .getElementById(id)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              aria-label={`Navigate to ${label}`}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>

      <MobileNavigation />
    </nav>
  );
};

export default NavigationRoutes;
