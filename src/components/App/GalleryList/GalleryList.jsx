import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList(props) {

    return (
        <div>
            {props.list.map(imageItem => (
                <>
                    <GalleryItem image={imageItem} fetchGallery={props.fetchGallery} />
                </>
            ))}
        </div>
    )
}

export default GalleryList;