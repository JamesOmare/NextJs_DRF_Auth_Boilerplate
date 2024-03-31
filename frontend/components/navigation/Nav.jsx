import ActionButtons from "@components/navigation/ActionButtons";
import Logo from "@components/navigation/Logo";
import { NavigationMenuBar } from "@components/navigation/NavigationBar";

const Navbar = () => {
    return ( <div className="
    flex
    justify-between
    items-center px-10 border-b h-40
    
    ">
       <Logo />
       <NavigationMenuBar />
       <ActionButtons />
    </div> );
}
 
export default Navbar;