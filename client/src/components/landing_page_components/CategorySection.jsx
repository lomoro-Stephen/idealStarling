import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faChartLine, faCode, faDraftingCompass, faEnvelope, faLaptopCode, faMobileAlt, faPaintBrush, faSearch, faServer } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './landingPageStylings/categoriesSection.css';

export default function CategorySection() {
  return (
    <section className='categoriesWrap'>
      <h2>Explore Our Categories</h2>
      <p>Find a wide range of courses across various categories tailored to help you achieve your goals and enhance your skills.</p>
      <div className="categories-cards">
        {categoriesData.map((category, index) => (
          <Link to={category.link} key={index} className="category-card">
            <div className="category-icon">
              <FontAwesomeIcon icon={category.icon} />
            </div>
            <div className="category-info">
              <span>{category.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

const categoriesData = [
  { icon: faPaintBrush, title: 'Graphics Design', link: '/graphics-design' },
  { icon: faBullhorn, title: 'Digital Marketing', link: '/digital-marketing' },
  { icon: faEnvelope, title: 'Email Marketing', link: '/email-marketing' },
  { icon: faSearch, title: 'SEO', link: '/seo' },
  { icon: faCode, title: 'Full Stack Development', link: '/full-stack-development' },
  { icon: faLaptopCode, title: 'Front End Web Development', link: '/front-end-web-development' },
  { icon: faServer, title: 'Back End Development', link: '/back-end-development' },
  { icon: faChartLine, title: 'Data Analysis', link: '/data-analysis' },
  { icon: faDraftingCompass, title: 'UI/UX Design', link: '/ui-ux-design' },
  { icon: faMobileAlt, title: 'App Development', link: '/app-development' }
];


