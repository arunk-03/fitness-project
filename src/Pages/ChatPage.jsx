import NavBar from "../Components/NavBar";
import Bottom from "../Components/Bottom";
import LeftNavBar from "../Components/LeftNavBar";

export default function ChatPage() {
    return (
        <div className=" bg-gray-100">
        <NavBar />
        <div className="flex gap-6 p-6">
        <LeftNavBar />
        </div>
        <Bottom />
        </div>
    );
}