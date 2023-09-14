import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import SubHeader from "../Pages/Shared/Header/SubHeader";
import SidebarMenu from "../Pages/Shared/SidebarMenu/SidebarMenu";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <SubHeader></SubHeader>
            <div className="bg-base-200 h-screen">
                <div className="flex gap-2 container mx-auto px-20">
                    <div className="md:w-1/5">
                        <SidebarMenu></SidebarMenu>
                    </div>
                    <div className="md:w-4/5">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;