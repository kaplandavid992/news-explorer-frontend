import "./About.css";
import authorImage from '../../images/dave1.jpg';

function About() {
  return (
    <section className="about">
      <img src={authorImage}  className='about__image' alt="author closeup" />
      <article className="about__text-block">
        <h2 className="about__title">About the author</h2>
        <p className="about__paragraph">
          My name is David Kaplan, I'm a Full Stack Web Developer. 
          Graduate of Practicum by Yandex Web Development program (2022).  
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
