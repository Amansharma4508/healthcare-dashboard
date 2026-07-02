import DashboardLayout from "../../components/layout/DashboardLayout";

const DashboardHome = () => {
  return (
    <DashboardLayout>
      <div className="p-8">
        <h1 className="text-3xl font-bold">
          Welcome to User Dashboard
        </h1>
      </div>
    </DashboardLayout>
  );
};

export default DashboardHome;