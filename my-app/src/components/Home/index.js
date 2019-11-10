import React from 'react';
import Opts from './Menu-opt'
import Header from '../Header'
import auth from '../../controller/routes/auth';

const Home = (props) => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <>
      <Header logoutprop={props} />
      <section id="home-menu" className="fill-available mb-4 container-fluid d-flex flex-wrap align-content-around justify-content-center">
        <Opts click={() => { return auth.login(() => { props.history.push("/orders") })}} name="ÓRDENES"  />
        <Opts click={() => { return auth.login(() => { props.history.push("/cocina") })}} name="COCINA"  />
        {user.roles.admin === true && <Opts click={() => { return auth.login(() => { props.history.push("/admin") })}} name="ADMIN"  />}
      </section>
    </>
  )
}

export default Home;