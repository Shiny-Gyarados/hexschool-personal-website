import ReadMoreLink from "@/components/atoms/ReadMoreLink";
import type { PodcastItem } from "@/components/organisms/SuccessCaseForConsulting/SuccessCaseForConsulting";
import "./podcast-card.scss";

interface PodcastCardProps {
    podcastItem: PodcastItem;
}

function PodcastCard({ podcastItem }: PodcastCardProps) {
    return (
        <li key={podcastItem.id} className="col-12 col-md-6 col-xxl-3 mb-6">
            <div className="podcast-card">
                <div className="mb-4">
                    <img src={podcastItem.avatar} alt={`podcast 頭像${podcastItem.id}`} />
                </div>
                <h4 className="fw-bold">{podcastItem.title}</h4>
                <ul className="podcast-card__main-points list-unstyled pb-4 mb-4">
                    {podcastItem.mainPoints.map((mainPoint) => (
                        <li key={mainPoint} className="d-flex align-items-center">
                            <input type="checkbox" checked readOnly />
                            <span>{mainPoint}</span>
                        </li>
                    ))}
                </ul>
                <ReadMoreLink href={podcastItem.link}>前往聆聽 podcast</ReadMoreLink>
            </div>
        </li>
    );
}

export default PodcastCard;
