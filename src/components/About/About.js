import "./About.css";
import authorImage from '../../images/image-03_pn.png';

function About() {
  return (
    <section className="about">
      <img src={authorImage}  className='about__image' alt="Image of author" />
      <div className="about__text-block">
        <h2 className="about__header">About the author</h2>
        <p className="about__paragraph">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know. You
          can also talk about your experience with Practicum, what you learned
          there, and how you can help potential customers.
        </p>
      </div>
    </section>
  );
}

export default About;
