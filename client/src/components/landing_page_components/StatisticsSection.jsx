import './landingPageStylings/StatisticSection.css';

export default function StatisticsSection() {
  return (
      <section className='statisticsWrap'>
          <div className="statisticInfo">
            <h2 className='statisticTitle'>Our Achievements</h2>
            <p className='statistic-desc'>
                Discover the milestones we have reached in our journey to provide quality education and training.
            </p>
          </div>
      <div className="statistics">
        {statsData.map((stat, index) => (
          <div className="statistic" key={index}>
            <span>{stat.value}</span>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const statsData = [
  { value: '200+', label: 'Total Courses Available' },
  { value: '500+', label: 'Students Enrolled' },
  { value: '100+', label: 'Expert Instructors' },
  { value: '50+', label: 'Courses Completed' },
  { value: '300+', label: 'Certifications Issued' },
  { value: '25+', label: 'Industry Partners' }
];
