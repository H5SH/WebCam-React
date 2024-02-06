import { useEffect } from "react"
import { useState } from "react"


function DisplayPicture({image, setImage}){

    const [url, setUrl] = useState('')

    async function getImage(){
        try{
            const response = await fetch(image)
            const u = await response.blob()
            const file = new File([u], 'test.jpeg', {type: 'image/jpeg'})
            console.log(file)
            setUrl(URL.createObjectURL(u))
            // setUrl(URL.createObjectURL(file))
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getImage()
    }, [])
    

    return (
        <>
        {url.length > 0 &&
        <>
        <img src={url} alt="image" width={200} height={200}/>
        <a href={url} download={true}>Download</a>
        <button onClick={()=> setImage('')}>Remove</button>
        </>
        }
        </>
    )
}

export default DisplayPicture