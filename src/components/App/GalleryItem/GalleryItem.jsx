import "./GalleryItem.css"
import { useState } from 'react';
import axios from "axios";


function GalleryItem(props) {

    const [descriptionDisplay, setDescriptionDisplay] = useState(false);

    const toggleDescription = () => {
        setDescriptionDisplay(!descriptionDisplay)
    }

    const likeImage = (id) => {
        axios.put(`/gallery/like/${id}`)
            .then((response) => {
                // re fetch images
                props.fetchGallery();
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div class="gallery-image" >
            <img src={props.image.path} width="400" height="400"  onClick={() => toggleDescription()}/>
            {descriptionDisplay ? 
            <p class="image-description">
                {props.image.description} 
                <br></br>
                likes: {props.image.likes}
            </p> : null}
            
            <button class="like-button" onClick={() => likeImage(props.image.id)}>&#128151;</button>
        </div>
    );
}

export default GalleryItem;