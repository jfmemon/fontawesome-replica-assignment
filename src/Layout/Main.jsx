import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import SubHeader from "../Pages/Shared/Header/SubHeader";
import SidebarMenu from "../Pages/Shared/SidebarMenu/SidebarMenu";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <SubHeader></SubHeader>
            <div className="bg-base-200 md:h-screen">
                <div className="md:flex md:gap-2 md:container mx-auto md:px-20 px-6">
                    <div className="md:w-1/5 invisible md:visible">
                        <SidebarMenu></SidebarMenu>
                    </div>
                    <div className="md:w-4/5 w-full">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;