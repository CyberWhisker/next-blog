import Image from "next/image";
import Logo from '../../public/logo/Logo.svg';

const TopNavBar = () => {
    return (
        <nav className="bg-slate-800 p-5 text-white flex justify-between">
            <div className="flex items-center">
                <Image
                    src={Logo}
                    alt="Logo"
                    height={36}
                    style={{backgroundColor: "white", borderRadius: "100%", marginRight: "10px"}}
                />            
                <span className="ml-2 font-bold">CyberWhisker</span>
            </div>
            <div className="flex items-center">
                <label>Welcome To NextJS Blog</label>
            </div>
        </nav>
    )
}

export default TopNavBar;