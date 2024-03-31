import '@styles/globals.css';
import Provider from '@components/Provider';
import { Outfit } from 'next/font/google'
import Navbar from '@components/navigation/Nav';
import Footer from '@components/footer/Footer';

const font = Outfit({ subsets: ['latin'] })

export const metadata = {
    title : "Prompter",
    description: 'Discover and share AI prompts'
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body className={font.className}>
            <Provider>
            <div className='main'>
                <div className="gradient"/>
            </div>

            <main className='app'>
                <Navbar/>
                {children}
                <Footer/>
            </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout