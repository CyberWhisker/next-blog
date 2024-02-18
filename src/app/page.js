import Image from 'next/image'
import BgLogo from "../../public/logo/Mylogo.png"
import TopNavBar from '@/components/topNavBar'
import LogReg from './LogReg'

export const metadata = {
    title: 'Laravel',
}

const Home = () => {
    return (
        <div className="overflow-hidden">
            <TopNavBar/>
            {/* <LoginLinks /> */}
            <div className='flex justify-between p-10'>
                <Image
                    src={BgLogo}
                    alt="Background Logo"
                    height={600}
                    style={{borderRadius: '100%', opacity: '0.8', marginLeft: '10%'}}
                />
                <LogReg/>
            </div>
        </div>
    )
}

export default Home
