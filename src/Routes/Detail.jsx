import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [dentist, setDentist] = useState({});
  
  const { id } = useParams();
  console.log(id);
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    axios(url)
      .then((res) => {
        console.log(res.data);
        setDentist(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Detalle del dentista </h1>
      <h2>{dentist.name}</h2>
      <p>Email: {dentist.email}</p>
      <p>Tenéfono: {dentist.phone}</p>
      <p>Sitio web: {dentist.website}</p>
    </>
  )
}

export default Detail