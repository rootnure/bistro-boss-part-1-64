import Container from "../../components/Container";
import Banner from "./Banner";
import Category from "./Category";

const Home = () => {
    return (
        <div className="space-y-24 mb-24">
            <Container>
                <Banner></Banner>
            </Container>
            <Container>
                <Category></Category>
            </Container>
        </div>
    );
};

export default Home;