import './landingPageStylings/plans.css';
import PlanCard from './PlanCard';

const planPricing = [
  {
    planTitle: "Monthly Package",
    price: 19.99,
    featuresTitle: "Plan Features",
    featureTitle: "24/7 Support",
    featureDescription: "Get round-the-clock support for any issues.",
    featureTitle2: "Access to Basic Courses",
    featureDescription2: "Unlimited access to our basic course library.",
    featureTitle3: "Community Access",
    featureDescription3: "Join our community of learners and experts.",
    featureTitle4: "Monthly Webinars",
    featureDescription4: "Attend monthly webinars hosted by industry leaders.",
    featureTitle5: "Customizable Learning Path",
    featureDescription5: "Create a learning path tailored to your needs.",
  },
  {
    planTitle: "Annually Package",
    price: 199.99,
    featuresTitle: "Plan Features",
    featureTitle: "Priority Support",
    featureDescription: "Receive priority support for faster resolutions.",
    featureTitle2: "Access to Premium Courses",
    featureDescription2: "Unlimited access to our premium course library.",
    featureTitle3: "Exclusive Community Access",
    featureDescription3: "Join an exclusive community of top learners and professionals.",
    featureTitle4: "Quarterly Workshops",
    featureDescription4: "Participate in workshops led by industry experts every quarter.",
    featureTitle5: "Personalized Learning Path",
    featureDescription5: "Get a personalized learning path designed by our experts.",
  },
  {
    planTitle: "Unlimited Package",
    price: 499.99,
    featuresTitle: "Plan Features",
    featureTitle: "Dedicated Support",
    featureDescription: "Enjoy dedicated support from our team.",
    featureTitle2: "All Access Pass",
    featureDescription2: "Unlimited access to all courses and materials.",
    featureTitle3: "VIP Community Access",
    featureDescription3: "Join our VIP community for networking and collaboration.",
    featureTitle4: "Monthly Workshops",
    featureDescription4: "Attend monthly workshops with industry leaders.",
    featureTitle5: "Exclusive Resources",
    featureDescription5: "Access to exclusive resources and materials.",
  }
];

const titleColors = ["#FF6347", "#4682B4", "#32CD32"];

export default function Plans() {
  return (
    <section className='plans-section'>
      <h2 className='section-title'>Customized Learning For Everybody</h2>
          <p className='section-Description'>
              we understand that every learner is unique.
              Explore our plans and find the perfect fit for your learning journey.
      </p>
      <div className="plans-cards">
        {planPricing.map((plan, index) => (
          <PlanCard key={index} plan={plan} color={titleColors[index % titleColors.length]} />
        ))}
      </div>
    </section>
  );
}
