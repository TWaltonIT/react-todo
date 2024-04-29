import YoutubeEmbed from '../../utilities/YoutubeEmbed'
import './About.css'

export default function About() {
  return (
    <div id='aboutMe' className='container'>
      <h2>About Me:</h2>

      <div id='aboutBody' className="container">
        <p className="col-md-6 offset-md-3 text-center p-2">
          I am a 26 year old Kansas native with practical experience in customer service and academic knowledge of IT infrastructure, networking, security, development, and many other related aspects.
        </p>
        <p className="col-md-6 offset-md-3 text-center p-2">I made this app using <a href='https://react.dev'>ReactJS</a>. It is a testing ground for features such as making api calls using <a href='https://www.npmjs.com/package/react-axios'>Axios</a>.
        </p>
        <YoutubeEmbed />
      </div>      
    </div>
  )
}