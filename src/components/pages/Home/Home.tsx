import Banner from "@/components/organisms/Banner";
import AboutMe from "@/components/organisms/AboutMe";
import ProfessionalService from "@/components/organisms/ProfessionalService";
import BlogTopPicks from "@/components/organisms/BlogTopPicks";

function Home(): React.JSX.Element {
    return (
        <main>
            <Banner />
            <AboutMe />
            <ProfessionalService />
            <BlogTopPicks />
        </main>
    );
}

export default Home;
