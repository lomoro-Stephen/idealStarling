import PropTypes from 'prop-types';

const PlanCard = ({ plan, color }) => {
  return (
    <div className="plan-card">
      <h2 className="plan-title" style={{ color }}>{plan.planTitle}</h2>
      <h3 className="plan-price">${plan.price}</h3>
      <h4 className="features-title">{plan.featuresTitle}</h4>
      <div className="features">
        <h5 className="featureTitle">{plan.featureTitle}</h5>
        <p className="featureDescription">{plan.featureDescription}</p>
        <h5 className="featureTitle">{plan.featureTitle2}</h5>
        <p className="featureDescription">{plan.featureDescription2}</p>
        <h5 className="featureTitle">{plan.featureTitle3}</h5>
        <p className="featureDescription">{plan.featureDescription3}</p>
        <h5 className="featureTitle">{plan.featureTitle4}</h5>
        <p className="featureDescription">{plan.featureDescription4}</p>
        <h5 className="featureTitle">{plan.featureTitle5}</h5>
        <p className="featureDescription">{plan.featureDescription5}</p>
      </div>
      <button style={{color}}>Subscribe</button>
    </div>
  );
};

PlanCard.propTypes = {
  plan: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
};

export default PlanCard;
