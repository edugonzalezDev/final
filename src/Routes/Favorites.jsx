import Card from "../Components/Card";
import { useDentistStates } from '../Context/Context';
import "../Styles/Favorites.css";

const Favs = () => {
  const { state } = useDentistStates();

  return (
    <>
      <h1>Dentistas Favoritos</h1>
      <div className="favorites">
        {state.favs.map((dentist) => (
          <Card key={dentist.id} id={dentist.id} name={dentist.name} username={dentist.username} />
        ))}
      </div>
    </>
  );
};

export default Favs;
