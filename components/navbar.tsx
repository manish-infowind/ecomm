import Container from "./ui/container";
import Logo from "./Logo";
import NavbarActions from "./navbar-actions";
import { Button } from "./ui/button";
import NavbarSearch from "./navbar-search";
import MobileSidebar from "@/app/(admin)/_components/mobile-sidebar";
import NavItem from "./nav-item";

// Mock components for UI testing
const MockSignInButton = () => (
  <Button className="rounded-sm">Sign In</Button>
);

const MockSignUpButton = () => (
  <Button className="rounded-sm">Sign Up</Button>
);

const MockUserButton = () => (
  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center ml-2">
    <span className="text-sm font-semibold">U</span>
  </div>
);

const NavBar = () => {
  // Mock user state - change this to test different states
  const isLoggedIn = false; // Change to true to see logged in state

  return (
    <div className="border-b">
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <MobileSidebar>
            <NavbarSearch />
            <NavItem />
          </MobileSidebar>
          <div className="flex items-center max-md:hidden">
            <Logo />
            <NavItem />
          </div>
          <div className="max-md:hidden">
            <NavbarSearch />
          </div>
          <div className="flex items-center">
            <NavbarActions />
            {isLoggedIn ? (
              <MockUserButton />
            ) : (
              <div className="flex items-center gap-2 ml-2">
                <MockSignUpButton />
                <MockSignInButton />
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;