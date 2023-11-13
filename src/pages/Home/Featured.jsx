import SectionTitle from "../../components/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";
import Container from "../../components/Container";

const Featured = () => {
    return (
        <section style={{ backgroundImage: `url("${featuredImg}")` }} className="bg-cover">
            <div className="p-20 bg-black bg-opacity-50 text-white">
                <Container>
                    <SectionTitle
                        subHeading="Check It Out"
                        heading="Featured Items"
                    ></SectionTitle>
                    <div className="flex items-center justify-center gap-x-20">
                        <div>
                            <img src={featuredImg} alt="" />
                        </div>
                        <div className="space-y-2">
                            <p className="text-2xl font-extralight">Aug 23, 2026</p>
                            <p className="font-bold text-lg">Where Can I Get Some?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur similique praesentium accusantium consectetur adipisci odit, ratione, quas minima laborum mollitia delectus dignissimos sint. Reprehenderit soluta libero, placeat eos officia neque eligendi quos nemo molestiae hic aliquam laboriosam, a perferendis sit temporibus inventore praesentium ex magni? Maiores perferendis consectetur consequatur iure?</p>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default Featured;