import FirstRank from './FirstRank';
import SecondRank from './SecondRank';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const PodcastRanking = () => {
    return (
        <div className="container-fluid">
            <div className="container-fluid d-flex justify-content-between">
                <h1 className="text-left">Bảng Xếp Hạng Podcast</h1>
                <div className="text-right">Xem tất cả</div>
            </div>
            <div className="d-flex">
                <FirstRank />
                <SecondRank />
            </div>
        </div>
    )

}

export default PodcastRanking;