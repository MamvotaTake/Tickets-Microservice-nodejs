import axios from "axios";

const LandingPage = ({ currentUser }) => {
  console.log(currentUser)
  // axios.get('/api/users/currentuser')
  return <h1 className="container text-primary">Landing Page</h1>;
};
LandingPage.getInitialProps = async () => {
  if (typeof window === "undefined") {
    //we are on the server
    //requests should be made to ................/
  } else {
    // we are on the browser
    // request can be made with a base url of ''

    const { data } = await axios.get('/api/users/currentuser').catch(err=>{
      console.log(err.message);
    });

    return data;
  }

  return {};
};
export default LandingPage;
