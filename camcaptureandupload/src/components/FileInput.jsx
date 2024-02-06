import { useState } from "react"

function FileInput(){

    const [file, setFile] = useState('')
    console.log(file)

    return(
        <>
        <input
        type="file"
        onChange={(e)=> setFile(e.target.files[0])} 
        />
        </>
    )
}

export default FileInput