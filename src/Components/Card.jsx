import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {
  const imageUrl = "../../public/images/doctor.jpg";
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <div className="card">
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
