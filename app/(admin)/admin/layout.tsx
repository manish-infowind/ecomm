import Navbar from "../_components/Navbar";
import Sidebar from "../_components/Sidebar";

export const metadata = {
  title: "Admin | Kemal Store",
  description: `Admin for e-ecommerce, selling products, and new productivity`,
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  // Remove authentication check for UI testing
  return (
    <div className="h-full">
      <Navbar />
      <main className="pt-14 flex h-full gap-x-7">
        <div className="w-64 shrink-0 hidden md:block">
          <Sidebar />
        </div>
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;