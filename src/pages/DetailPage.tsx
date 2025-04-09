import { useState, useEffect } from "react";
import { useParams } from "react-router"
import { Beer } from "../types/BeerType";


function DetailPage() {
  const { beerID} = useParams();

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
    <div className="flex flex-col items-center m-8">
      <img className="w-xs rounded-2xl mb-4" src={beer.image_url} alt="" />
      <h2 className="text-5xl mb-2">{beer.name}</h2>
      <p className="text-yellow-400 mb-2">{beer.tagline}</p>
      <div className="text-stone-500 flex justify-between gap-8">
        <p>First brewed:</p>
        <p>{beer.first_brewed}</p>
      </div>
      <div  className="text-stone-500 flex justify-between gap-8">
        <p>Attenuation level:</p>
        <p>{beer.attenuation_level}</p>
      </div>
  
      
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>

    </div>
  )
}

export default DetailPage
