import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";


const Layout = () => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main className="flex-grow flex item-center justify-center container mx-auto p-4 sm:p-6 lg:p-8 pt-20">
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout;
