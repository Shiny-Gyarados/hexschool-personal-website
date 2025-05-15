import Banner from "@/components/organisms/Banner";
import AboutMe from "@/components/organisms/AboutMe";
import ProfessionalService from "@/components/organisms/ProfessionalService";
import BlogTopPicks from "@/components/organisms/BlogTopPicks";
import SuccessCaseForConsulting from "@/components/organisms/SuccessCaseForConsulting";
import EmailSubscriptionForm from "@/components/organisms/EmailSubscriptionForm";
import ContactMe from "@/components/organisms/ContactMe";

function Home(): React.JSX.Element {
    return (
        <main>
            <Banner />
            <AboutMe />
            <ProfessionalService />
            <BlogTopPicks />
            <SuccessCaseForConsulting />
            <EmailSubscriptionForm />
            <ContactMe />
        </main>
    );
}

export default Home;
