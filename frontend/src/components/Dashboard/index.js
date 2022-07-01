import LeftNav from "../Navigation/LeftNav";
import RightNav from "../Navigation/RightNav";
import View from "../View";

function Dashboard({ isLoaded }) {
    return (
        <>
            <LeftNav />
            <View isLoaded={isLoaded}/>
            <RightNav />
        </>
    )
}

export default Dashboard;
