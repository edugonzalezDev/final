import Card from '../Components/Card';
import { useDentistStates } from '../Context/Context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state, theme } = useDentistStates();

  return (
    <>
      <h1>Dentistas</h1>
      <div className={`home ${theme}`}>
        {
        state.dentists.map((dentist) => (
          <Card key={dentist.id} id={dentist.id} name={dentist.name} username={dentist.username} />
        ))}
      </div>
    </>
  )
}

export default Home