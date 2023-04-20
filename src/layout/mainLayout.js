import Nav from "../components/nav";
import InnerNav from "../components/innerNav";
import { Outlet } from "react-router-dom";
import DownloadApp from "../components/downloadApp";
import Bottom from "../components/Bottom";
function MainLayout() {
    return (
        <>

            <div className="flex min-h-screen w-full flex-col justify-between">
                <Nav />
                <div className="min-h-full w-full flex-grow">
                    <InnerNav />
                    <div className="relative mx-auto max-w-screen-2xl">
                        <div>
                            <Outlet />
                        </div>
                        <DownloadApp />
                    </div>
                    <Bottom />
                </div>
            </div>

        </>

    )

}

export default MainLayout;