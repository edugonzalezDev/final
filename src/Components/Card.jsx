import { Link } from "react-router-dom";
import "../Styles/Card.css";
import { useDentistStates } from "../Context/Context";
import imageDoctor from "../assets/doctor.jpg";

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useDentistStates();

  const addFav = () => {
    dispatch({ type: "ADD_FAV", payload: { name, username, id } });
  };

  return (
    <div className={`card card-${state.theme}`}>
      <img src={imageDoctor} alt="Imagen de perfil" className="card-image" />
      <div className="card-content">
        <Link to={"/detail/" + id}>
          <h3 className="card-title">{name}</h3>
        </Link>
        <p className="card-description">{username}</p>
      </div>
      <button onClick={addFav} className="favButton">
        ⭐
      </button>
    </div>
  );
};

export default Card;
