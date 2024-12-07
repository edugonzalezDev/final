import Card from "../Components/Card";
import { useDentistStates } from "../Context/Context";
import "../Styles/Home.css";

const Home = () => {
  const { state } = useDentistStates();

  return (
    <>
      <h1>Dentistas</h1>
      <div className={`home ${state.theme}`}>
        {state.dentists.map((dentist) => (
          <Card
            key={dentist.id}
            id={dentist.id}
            name={dentist.name}
            username={dentist.username}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
