import { useEffect, useState } from "react";

type PersonStringProps =
  | "name"
  | "eye_color"
  | "birth_year"
  | "gender"
  | "skin_color"
  | "hair_color"
  | "homeworld"
  | "terrain";

type SWPerson = {
  [Property in PersonStringProps]: string;
};

// type SWPerson = SWPersonMapped & {
//   films: string[];
// };

const Person = () => {
  // const [name, setName] = useState('');
  const [person, setPerson] = useState({} as SWPerson);

  useEffect(() => {
    const url = "https://swapi.py4e.com/api/people/1/";
    const fetchLuke = async () => {
      const result = await fetch(url);
      const luke = await result.json();

      const homeworldResponse = await fetch(luke.homeworld);
      const homeworldData = await homeworldResponse.json();

      if (!ignore) {
        setPerson({
          name: luke.name,
          eye_color: luke.eye_color,
          birth_year: luke.birth_year,
          gender: luke.gender,
          skin_color: luke.skin_color,
          hair_color: luke.hair_color,
          // films: luke.films,
          homeworld: homeworldData.name,
          terrain: homeworldData.terrain,
        });
      }
    };

    let ignore = false;
    fetchLuke();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <section>
        Name:{" "}
        {person
          ? `Name: ${person.name}, Eye color: ${person.eye_color}, Birth year: ${person.birth_year} Gender: ${person.gender} Skin color: ${person.skin_color} Hair Color: ${person.hair_color} 
                
                   
                
                Homeworld: ${person.homeworld}
                Homeworld Terrain: ${person.terrain}
                `
          : "Loading..."}
      </section>
    </>
  );
};

export default Person;
