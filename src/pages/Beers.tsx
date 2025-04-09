import { Link } from "react-router";
import { Beer } from "../types/BeerType";
import { useState, useEffect } from "react";

function Beers() {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBeers(data);
      })
      .catch()
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading && <p className="text-5xl">🍻🍻🍻Loading...🍻🍻🍻</p>}

      {!isLoading &&
        beers.map((beer) => (
          <article className="flex mb-5" key={beer._id}>
            <img
              src={beer.image_url}
              alt="image of beer"
              className="w-2xs m-3"
            />
            <div className="flex flex-col gap-4 justify-center">
              <h2 className="text-5xl">{beer.name} </h2>
              <p className="text-yellow-400 text-2xl">{beer.tagline}</p>
              <p>{beer.contributed_by}</p>
              <Link
                to={"/beers/" + beer._id}
                className="bg-yellow-400 text-stone-50 w-25 text-center rounded-[15px] px-4 py-2"
              >
                Details
              </Link>
            </div>
          </article>
        ))}
    </>
  );
}

export default Beers;
