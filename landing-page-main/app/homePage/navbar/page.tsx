import ThemeSwitch from "@/components/ui/ThemeSwitch";
import ActionButtons from "./action-buttons";
import Logo from "./logo";
import { NavigationMenuBar } from "./navigation-bar";
import SearchBar from "../../../components/SearchBar"; // Import the SearchBar component

const Navbar = () => {
  return (
    <div className="h-24 flex justify-between items-center px-10 sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <Logo />
      <SearchBar /> {/* Add the SearchBar component */}
      <NavigationMenuBar />
      <ActionButtons />
    </div>
  );
};

export default Navbar;
