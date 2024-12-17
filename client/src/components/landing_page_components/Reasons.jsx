import './landingPageStylings/reasons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAward, faBook, faClock, faHandHoldingDollar, faHandshakeAngle, faHeadset, faNetworkWired, faUsers} from '@fortawesome/free-solid-svg-icons';




const ReasonsCardContent = [
  {
    icon: faUsers,
    title: "Expert Instructors",
    description: "Learn from industry leaders who are passionate about teaching."
  },
  {
    icon: faClock,
    title: "Flexible Learning",
    description: "Study at your own pace, with courses designed to fit your schedule."
  },
  {
    icon: faBook,
    title: "Comprehensive Curriculum",
    description: "Our courses cover all the essential topics to help you succeed."
  },
  {
    icon: faHandshakeAngle,
    title: "Interactive Content",
    description: "Engage with interactive lessons and hands-on projects."
  },
  {
    icon: faHeadset,
    title: "Career Support",
    description: "Get career guidance and job placement assistance after completion."
  },
  {
    icon: faHandHoldingDollar,
    title: "Affordable Pricing",
    description: "Access high-quality education at a price you can afford."
  },
  {
    icon: faAward,
    title: "Accredited Certification",
    description: "Earn certificates recognized by industry leaders and employers."
  },
  {
    icon: faNetworkWired,
    title: "Community Networking",
    description: "Connect with peers and professionals to expand your network."
  }
];

export default function Reasons() {
  return (
    <section>
      <div className="reasons-wrap">
        <h2>Why You Should Choose Our Courses</h2>
        <div className="reasons-cards">
          {ReasonsCardContent.map((ReasonsCard, index) => (
            <div className="reason-card" key={index}>
              <div className="card-icon">
              <FontAwesomeIcon icon={ReasonsCard.icon} />
              <h4>{ReasonsCard.title}</h4>
              </div>
              <div className="card-body-wrap">
                <p>{ReasonsCard.description}</p>
                <div className="btn-wrapper">
                  <span className="text-button">Discover more 
                    
                  </span>
                  <FontAwesomeIcon icon={faArrowRight}/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
