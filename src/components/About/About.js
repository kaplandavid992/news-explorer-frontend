import "./About.css";
import authorImage from '../../images/dave1.jpg';
import TitleH2 from "../TitleH2/TitleH2";

function About() {
  return (
    <section className="about">
      <img src={authorImage}  className='about__image' alt="Image of author" />
      <article className="about__text-block">
        <h2 className="about__h2Title">About the author</h2>
        <p className="about__paragraph">
          Hi I'm David Kaplan, a Full Stack Web Developer. Graduate of Practicum by Yandex Web Development program. 
          The course was an 8-month (2022) intensive program designed to train talents to be successful Web Developers.
          Coursework Includes: HTML, CSS, JavaScript, React/Redux, MongoDB, NodeJS.
          The course curriculum included an interactive platform, projects, 
          live coding and Q&A sessions, soft skills and interview preperation. 
          As a passionate Developer, independent learner,
          and problem solver I beilieve I can bring great value 
          to your work place, feel
          free to checkout additional projects I completed and contacting me.

        </p>
      </article>
    </section>
  );
}

export default About;
