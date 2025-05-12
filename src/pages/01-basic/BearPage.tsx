import { useShallow } from 'zustand/shallow';
import { WhiteCard } from '../../components';
import { useBearStore } from '../../stores';

export const BearPage = () => {


  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">

        <BlackBears/>
        <PolarBears/>
        <PandaBears/>

        <BearsDisplay/>

      </div>

    </>
  );
};

export const BlackBears = () => {
  const blackBears = useBearStore(state => state.blackBears);
  const incerementBlackBears = useBearStore(state => state.incerementBlackBears); 

  return (
    <WhiteCard centered>
      <h2>Osos Negros</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => incerementBlackBears(1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {blackBears} </span>
        <button onClick={() => incerementBlackBears(-1)}>-1</button>
      </div>

    </WhiteCard>
  );
};

export const PolarBears = () => {
  const polarBears = useBearStore(state => state.polarBears);
  const incerementpolarBears = useBearStore(state => state.incerementPolarBears); 

  return (
    <WhiteCard centered>
      <h2>Osos Polares</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => incerementpolarBears(1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {polarBears} </span>
        <button onClick={() => incerementpolarBears(-1)}>-1</button>
      </div>

    </WhiteCard>
  );
};

export const PandaBears = () => {
  const pandaBears = useBearStore(state => state.pandaBears);
  const incerementpandaBears = useBearStore(state => state.incerementPandaBears); 

  return (
    <WhiteCard centered>
      <h2>Osos Pandas</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => incerementpandaBears(1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {pandaBears} </span>
        <button onClick={() => incerementpandaBears(-1)}>-1</button>
      </div>

    </WhiteCard>
  );
};

export const BearsDisplay = () => {

  const bears = useBearStore( useShallow(state => state.bears));
  const doNothing = useBearStore(state => state.doNothing);
  const addBear = useBearStore(state => state.addBear);
  const clearBears = useBearStore(state => state.clearBears);

  return (
    <WhiteCard >
      <h1>Lista de Osos</h1>
      <button onClick={doNothing}>No hace nada</button>
      <button className='mt-2' onClick={addBear}>Agregar</button>
      <button className='mt-2' onClick={clearBears}>Eliminar</button>
      <pre>
        {JSON.stringify(bears, null, 2)}
      </pre>
    </WhiteCard>
  )
}