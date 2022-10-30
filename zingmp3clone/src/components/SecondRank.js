import Rank from './Rank';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../App.css';

const SecondRank = () => {
    return (
        <div className="container p-5 m-4 align-items-center rounded ranking_list">
            
            <Rank rank='4' name="85. Hành Trình Hiểu Về Bản Thân" speaker="HIEU.TV" published="11/10/2022" time="19 phút" />

            <Rank rank='5' name="86. Hướng Nội và Hướng Ngoại" speaker="HIEU.TV" published="21/10/2022" time="22 phút" />

            <Rank rank='6' name="Cuối đoạn đường | Tập cuối - Nắng Thủy Tinh Podcast Series" speaker="Nắng Thủy Tinh" published="21/08/2022" time="24 phút" />

        </div>
    )
}

export default SecondRank;