import React from "react";
import { ReactVideo } from "reactjs-media";
import ReactWebMediaPlayer from 'react-web-media-player';

const Videop = () => {
    return (
        <div>
            <div className='container'>
                <div className="row mt-5">
                    <div className="col-8">
                        <ReactVideo
                            
                            src="video/log02.mp4"
                            poster="img/admission.jpg"
                            primaryColor="red"
                            // other props
                        />
                    </div>
                    <div className="col-4">
                        hihihi
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-4">
                       hihi
                    </div>
                    <div className="col-8">
                    <ReactWebMediaPlayer
                            title="My own video player"
                            video="video/log02.mp4" 
                            thumbnail="img/admission.jpg"
                            logo={{ 
                                img: "img/logo.png", 
                                href: "https:/redirection-link.com" 
                            }}
                        />
                    
                    
                    </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default Videop;