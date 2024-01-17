import './VideoPage.css'
import { Link } from 'react-router-dom';


export function VideoPage() {
    return (
        <div>
          <div className='button'>
          <Link to="/home"><svg className='flecha' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="#0EAD6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></Link>
          </div>

          <video src="./src/Assets/video.mp4" controls />
          
        </div>
      );
}
