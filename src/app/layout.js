import '@/app/global.css'
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Notification from "@/components/Notifcation";

export const metadata = {
    title: 'Laravel',
}
const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className="antialiased">
                <AntdRegistry>
                    <Notification/>
                    {children}
                </AntdRegistry>
            </body>
        </html>
    )
}

export default RootLayout
