
import Image from "next/image";
import {logo} from "@components/Images";


const Logo = () => {
    return ( <div>


        <Image 
        src={logo}
        width={50} 
        height={50} 
        alt="logo"
        />
    
    </div> );
}
 
export default Logo;