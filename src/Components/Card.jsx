import { Link } from "react-router-dom";
import "../Styles/Card.css";
import { useDentistStates } from '../Context/Context';

const Card = ({ name, username, id }) => {
  const { theme, setTheme } = useDentistStates();
  const imageUrl = "/images/doctor.jpg";
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <div className={`card card-${theme}`}>
      <img src={imageUrl} alt="Imagen de perfil" className="card-image" />
      <div className="card-content">
        <Link to={"/detail/" + id}>
          <h3 className="card-title">{name}</h3>
        </Link>
        <p className="card-description">{username}</p>
      </div>
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
