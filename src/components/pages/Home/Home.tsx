import Banner from "@/components/organisms/Banner";
import AboutMe from "@/components/organisms/AboutMe";
import ProfessionalService from "@/components/organisms/ProfessionalService";

function Home(): React.JSX.Element {
    return (
        <main>
            <Banner />
            <AboutMe />
            <ProfessionalService />
        </main>
    );
}

export default Home;
