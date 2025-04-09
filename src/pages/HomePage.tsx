import { Link } from "react-router";
import AllBeersImage from "../assets/img/christin-hume-08tX2fsuSLg-unsplash.jpg"
import RandomBeerImage from "../assets/img/proriat-hospitality-flENqflm6xU-unsplash.png"


function HomePage() {
  return (
    <div>
      <Link className="mb-2" to="/beers">
        <div>
          <img src={AllBeersImage} alt="" />
          <p className="bg-yellow-400 text-stone-50 text-4xl mb-3">All Beers</p>
        </div>
      </Link>

      <Link to="/beers/random">
        <div>
          <img src={RandomBeerImage} alt="" />
          <p className="bg-yellow-400 text-stone-50 text-4xl mb-3">Random Beer</p>
        </div>
      </Link>
    </div>
  );
}

export default HomePage;
