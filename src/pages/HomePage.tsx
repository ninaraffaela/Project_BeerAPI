import { Link } from "react-router";
import AllBeersImage from "../assets/img/christin-hume-08tX2fsuSLg-unsplash.jpg"
import RandomBeerImage from "../assets/img/proriat-hospitality-flENqflm6xU-unsplash.png"


function HomePage() {
  return (
    <div className="m-4 flex flex-col justify-center items-center">
      <Link to="/beers">
        <div className="w-87">
          <img src={AllBeersImage} alt="" />
          <p className="bg-yellow-400 p-2 text-stone-50 text-4xl w-full">All Beers</p>
        </div>
        <p className="w-87 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, sunt.</p>
      </Link>

      <Link to="/beers/random">
        <div className="w-87">
          <img src={RandomBeerImage} alt="" />
          <p className="bg-yellow-400 p-2 text-stone-50 text-4xl w-full">Random Beer</p>
        </div>
        <p className="w-87 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, sunt.</p>
      </Link>

    </div>
  );
}

export default HomePage;
