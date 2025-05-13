import Banner from "@/components/organisms/Banner";
import AboutMe from "@/components/organisms/AboutMe";
import ProfessionalService from "@/components/organisms/ProfessionalService";
import BlogTopPicks from "@/components/organisms/BlogTopPicks";
import SuccessCaseForConsulting from "@/components/organisms/SuccessCaseForConsulting";

function Home(): React.JSX.Element {
    return (
        <main>
            <Banner />
            <AboutMe />
            <ProfessionalService />
            <BlogTopPicks />
            <SuccessCaseForConsulting />
        </main>
    );
}

export default Home;
