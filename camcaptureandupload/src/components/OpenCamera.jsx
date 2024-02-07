import { useState } from 'react'
import WebCam from 'react-webcam'
import DisplayPicture from './DisplayPicture'

function OpenCamera(){

    const [image, setImage] = useState('')


    return (
        <div style={{marginTop: 20, textAlign: 'center', alignContent: 'center'}}>
        <WebCam
        audio={false}
        height={720}
        screenshotFormat='image/jpeg'
        width={1280}
        videoConstraints={{
            width: 1280,
            height: 720,
            facingMode: 'user'
        }}
        mirrored
        onUserMediaError={()=>(
            <div>
                <p>No Camera Was Found</p>
            </div>
        )}
        >
            {({ getScreenshot }) => (
                <button onClick={()=> {
                    setImage(getScreenshot())

                }}>
                    Capture
                </button>
            )}
        </WebCam>
        {image.length > 0 && <DisplayPicture image={image} setImage={setImage}/>}
        </div>
    )

}

export default OpenCamera