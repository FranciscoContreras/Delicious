import { useEffect } from "react";

function Popular() {

  useEffect(() => {
    getPopular(); // Import the populr category the api and activate
  },[]); // Empty array to pass possible aditional information

  // import data
  const getPopular = async () => {
    const api   = 
                await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
    const data  = 
                await api.json();
  }


  return <div>Popular</div>
}

export default Popular