import Container from "../../components/Container";
import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div className="space-y-20 mb-20">
            <Banner></Banner>
            <Container>
                <Category></Category>
            </Container>
            <Container>
                <PopularMenu></PopularMenu>
            </Container>
            <Featured></Featured>
            <Container>
                <Testimonials></Testimonials>
            </Container>
        </div>
    );
};

export default Home;