import React, { Component } from 'react';
import VideoPlayer from './video';

class Videopage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">

                <h1>Your video is here</h1>
                <div className='row mt-5'>
                    <div className="col-8">
                        <VideoPlayer 
                        
                        />
                    </div>
                    <div className="col-4">
                        hihi
                    </div>

                </div>
            </div>
         );
    }
}
 
export default Videopage;