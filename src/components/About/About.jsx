import YoutubeEmbed from '../../utilities/YoutubeEmbed'
import './About.css'

export default function About() {
  return (
    <div id='aboutMe' className='container'>
      <h2>About Me:</h2>

      <div id='aboutBody' className="container">
        <p className="col-md-8 offset-md-2 text-center p-2">
        Hi, I'm Thomas Walton. Thanks for checking out my ToDo app! This app is written in <a href='https://react.dev'>ReactJS</a>  and communicates with a Microsoft SQL database via an <a href='https://learn.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-6.0'>ASP.NET Core 6 Web API</a>. Several npm packages were implemented in this app for advanced functionality, including routing via <a href='https://reactrouter.com/en/main'>React Router Dom</a>, API request handling through <a href='https://axios-http.com/'>Axios</a>, authorization via <a href='https://firebase.google.com/products/auth'>Google Firebase</a> and form handling and schema validation using a combination of <a href='https://formik.org/docs/overview'></a>Formik and <a href='https://github.com/jquense/yup'>Yup</a>. The full source code is <a href='https://github.com/TWaltonIT/react-todo'></a> available on GitHub.
        </p>
        <YoutubeEmbed />
      </div>      
    </div>
  )
}