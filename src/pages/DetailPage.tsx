import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Beer } from "../types/BeerType";
import { Link } from "react-router";
import ArrowImage from "../assets/img/YellowArrow.png";

function DetailPage() {
  const { beerID } = useParams();

  const [beer, setBeer] = useState<Beer | null>(null);

  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerID}`)
      .then((res) => res.json())
      .then((data) => setBeer(data))
      .catch((err) => console.log(err));
  }, [beerID]);

  if (!beer) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center m-5">
      <img className="w-xs rounded-2xl mb-4" src={beer.image_url} alt="" />
      <article className="w-100">
        <h2 className="text-5xl font-semibold mb-2">{beer.name}</h2>
        <p className="text-yellow-400 font-bold mb-2">{beer.tagline}</p>
        <div className="text-stone-500 text-sm flex justify-between">
          <p>First brewed:</p>
          <p>{beer.first_brewed}</p>
        </div>
        <div className="text-stone-500 text-sm flex justify-between mb-2">
          <p>Attenuation level:</p>
          <p>{beer.attenuation_level}</p>
        </div>

        <p className="mb-2">{beer.description}</p>
        <p>{beer.contributed_by}</p>
        <Link to="/beers">
          <img src={ArrowImage} alt="ArrowButton" />
        </Link>
      </article>
    </div>
  );
}

export default DetailPage;
