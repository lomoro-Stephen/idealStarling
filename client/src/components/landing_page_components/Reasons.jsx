import './landingPageStylings/reasons.css'

const ReasonsCardContent = [
    {
        icon: 1,
        title: "Reason 1",
        description: "Description 1",
        btn: "Discover"
    },
    {
        icon: 1,
        title: "Reason 1",
        description: "Description 1",
        btn: "Discover"
    },
    {
        icon: 1,
        title: "Reason 1",
        description: "Description 1",
        btn: "Discover"
    },
    {
        icon: 1,
        title: "Reason 1",
        description: "Description 1",
        btn: "Discover"
    },
    {
        icon: 1,
        title: "Reason 1",
        description: "Description 1",
        btn: "Discover"
    }
];
export default function Reasons() {
  return (
    <section>
          <div className="reasons-wrap">
              <h2>Why You should Choose our courses</h2>
              <div className="reasons-cards">
              {ReasonsCardContent.map((ReasonsCard, index) => {
                  <div className="reason-card" key={index}>
                      <div className="card-icon"></div>
                      <div className="card-border">
                          <h4>{ReasonsCard.title }</h4>
                          <p>{ReasonsCard.description}</p>
                          <h6>{ReasonsCard.btn}</h6>
                      </div>
                  </div>
              })}
        </div>
      </div>
    </section>
  )
}
