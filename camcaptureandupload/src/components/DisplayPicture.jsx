

function DisplayPicture({image, setImage}){

    // const url = URL.createObjectURL(image)

    return (
        <>
        <img src={image} alt="image" width={200} height={200}/>
        <button onClick={()=> setImage('')}>Remove</button>
        </>
    )
}

export default DisplayPicture