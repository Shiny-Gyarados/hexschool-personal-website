import Banner from "@/components/organisms/Banner";
import AboutMe from "@/components/organisms/AboutMe";
import ProfessionalService from "@/components/organisms/ProfessionalService";
import BlogTopPicks from "@/components/organisms/BlogTopPicks";
import SuccessCaseForConsulting from "@/components/organisms/SuccessCaseForConsulting";
import EmailSubscriptionForm from "@/components/organisms/EmailSubscriptionForm";

function Home(): React.JSX.Element {
    return (
        <main>
            <Banner />
            <AboutMe />
            <ProfessionalService />
            <BlogTopPicks />
            <SuccessCaseForConsulting />
            <EmailSubscriptionForm />
        </main>
    );
}

export default Home;
