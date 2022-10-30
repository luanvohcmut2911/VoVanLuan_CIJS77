import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Rank = ({ rank, name, speaker, published, time }) => {
    return (
        <div className="container p-1 d-flex text-left align-items-center">
            <h4 className="p-2"> <strong>{rank}</strong> </h4>
            <img src={require("./pexels-pixabay-509922.jpg")} alt="img" className="img-thumbnail m-2" style={{ width: 75, height: 75 }} />
            <div class="container m-1">
                {name}
                <br />
                <div class="info-podcast">
                    {speaker}
                    <br />
                    {published}, {time}
                </div>
            </div>
        </div>
    )
}
export default Rank;