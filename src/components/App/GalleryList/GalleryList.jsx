import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList(props) {

    return (
        <div>
            {props.list.map(imageItem => (
                <>
                    <GalleryItem image={imageItem} />
                </>
            ))}
        </div>
    )
}

export default GalleryList;