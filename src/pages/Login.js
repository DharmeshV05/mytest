import "../index.css"



const Login = () => {
  return (<>

<main className="container">

    <div className="center-side">
        <h1>Let's do this!</h1>

        <form action="#" className="form">

            <div className="inputs">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" required />
            </div>

            <div className="inputs">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" required />
            </div>

            <div>
                <button onClick="'../Dome.io.html'">LOGIN</button>
            </div>
        </form>
    </div>

    </main>


  </>);
};

export default Login;