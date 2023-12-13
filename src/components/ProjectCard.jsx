import { Link } from "react-router-dom";
import "./projectcard.css";
import makesure from "../assets/makesure.png";
import eatnsplit from "../assets/eatnsplit.png";
import reactquiz from "../assets/reactquiz.png";
import instantpopcorns from "../assets/instantpopcorns.png";

const works = [
  {
    name: "MakeSure",
    description:
      "Confused what you have packed and what you haven't packed during your travel. Now always be sure with make sure.",
    image: makesure,
    website: "https://iamkumudkhatiwada.github.io/make-sure/",
  },
  {
    name: "EatnSplit",
    description:
      "It always a good habit to remember what money you owe your friends and what they owe after having food together. EatnSplit helps you to keep track of that.",
    image: eatnsplit,
    website: "https://iamkumudkhatiwada.github.io/eat-split/",
  },
  {
    name: "ReactQuiz",
    description: "A simple react quiz to test your react knowledge",
    image: reactquiz,
    website: "https://iamkumudkhatiwada.github.io/react-quiz/",
  },
  {
    name: "InstantPopCorn",
    description:
      "A simple movie app to search for the movie online and make your watchlist. Give your own ratings and compare your ratings with that of IMDB ratings.",
    image: instantpopcorns,
    website: "https://iamkumudkhatiwada.github.io/Instant-popcorn/",
  },
];

const ProjectCard = () => {
  return (
    <div className="project">
      <ul className="card-container">
        {works.map((work) => (
          <Card
            key={work.name}
            name={work.name}
            description={work.description}
            image={work.image}
            address={work.website}
          />
        ))}
      </ul>
    </div>
  );
};

function Card({ name, description, image, address }) {
  return (
    <li className="card">
      <img src={image} alt={name} />
      <p>{description}</p>
      <a
        href={address}
        target="_blank"
        style={{ display: "block" }}
        className="btn"
      >
        visit
      </a>
    </li>
  );
}

export default ProjectCard;
