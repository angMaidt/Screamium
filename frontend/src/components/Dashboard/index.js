import LeftNav from "../Navigation/LeftNav";
import RightNav from "../Navigation/RightNav";
import View from "../View";
import './Dashboard.css';

function Dashboard({ isLoaded }) {
    return (
        <div id="dashboard">
            <LeftNav />
            <View isLoaded={isLoaded}/>
            <RightNav />
        </div>
    )
}

export default Dashboard;
