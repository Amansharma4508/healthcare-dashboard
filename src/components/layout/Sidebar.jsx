import { NavLink } from "react-router-dom";


const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200">
      {/* Logo */}
      <div className="h-20 flex items-center justify-center border-b">
        <h1 className="text-2xl font-bold text-blue-600">
          HealthCare
        </h1>
      </div>

      {/* Menu */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3 transition-all ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <Icon size={20} />
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;