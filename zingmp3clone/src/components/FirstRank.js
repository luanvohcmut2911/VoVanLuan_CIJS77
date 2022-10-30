import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';import Rank from './Rank';
import '../App.css';

const FirstRank = () => {
    return (
        <div className="container p-5 m-4 align-items-center rounded ranking_list">

            <Rank rank='1' name="#26 Bí quyết thành công của người Do Thái | Đắp Chăn Nằm Nghe..." speaker="Đắp Chăn Nằm Nghe Tun Kể" published="16/10/2022" time="16 phút"/>

            <Rank rank='2' name="#25 Cùng Đích Lép đi tìm 5 dấu hiệu lý tưởng mà một người bạn đời..." speaker="Đắp Chăn Nằm Nghe Tun Kể" published="09/10/2022" time="24 phút"/>

            <Rank rank='3' name="[Phần 2] Cuộc Đời Nói Chuyện Bằng Kết Quả - Tri kỷ cảm xúc #252" speaker="Tri kỷ cảm xúc" published="17/10/2022" time="25 phút"/>

        </div>
    )
}

export default FirstRank;