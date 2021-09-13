const NavBar = ({ getData }) => {
  return (
    <>
      <div id="navBar">
        <div id="navbarDiv">
          <h1>Let's Grow More Task2  </h1>
          <button onClick={getData}>click to get data</button>
        </div>
      </div>
      <div id="emptyData">
        <h1>No Users Found</h1>
        <div id="Line"></div>
      </div>
    </>
  );
};

const NavBar2 = ({getData}) => {
  return (
    <>
      <div id="navBar">
        <div id="navbarDiv">
         <h1> Get user data </h1> 
          {/* <button onClick={getData}>users here</button> */}
        </div>
      </div>
    </>
  );
};

export { NavBar,NavBar2 };