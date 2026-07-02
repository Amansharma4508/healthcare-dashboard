import Sidebar from "./Sidebar";
import { userSidebarMenu } from "../../data/userSidebarMenu";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar menuItems={userSidebarMenu} />

      <main className="flex-1 bg-slate-50 min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;