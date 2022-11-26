// import FacebookIcon from '@mui/icons-material/Facebook';
// import RedditIcon from '@mui/icons-material/Reddit';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import CopyrightIcon from '@mui/icons-material/Copyright';

// import {
//     FacebookIcon,
//     RedditIcon,
//     TwitterIcon,
//     InstagramIcon,
//     CopyrightIcon
// } from '@mui/icons-material';

import './index.css';

export const Footer = () => {
    return(
        <div className = 'footer'>
            <hr />
            <div className = 'leftPartUpper'>
                <p id = 'text'>Follow us on: </p>
                {/* <FacebookIcon />
                <RedditIcon />
                <InstagramIcon />
                <TwitterIcon />  */}
            </div>
            <div className = 'leftPartLower'>
                {/* <CopyrightIcon /> */}
                <p id='text'>HeatTV</p>
            </div>
        </div>
    )
}