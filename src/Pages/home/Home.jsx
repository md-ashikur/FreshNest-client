import Team from "../../partials/about/Team";
import HomeBlog from "../../partials/home/blog/HomeBlog";
import Featured from "../../partials/home/featured/Featured";
import OrganicFood from "../../partials/home/featured/OrganicFood";
import HomeHeader from "../../partials/home/HomeHeader";
import KeyPoint from "../../partials/home/keyPoint/KeyPoint";


const Home = () => {
    return (
        <div>
           <HomeHeader/>
           <Featured/>
           <OrganicFood/>
           <HomeBlog/>
           <KeyPoint/>
           <div className="my-20 lg:px-20 px-5">
           <Team />
           </div>
        </div>
    );
};

export default Home;