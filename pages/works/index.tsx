import { NextPage } from "next";
import Navbar from "../../components/Navbar";
import Layout from "../../components/Layout";

const WorksPage: NextPage = () => {
  return (
    <Layout>
      <div className="mx-auto">
        <section>
          <div className="brand">
            <h2 className="brand__title">Works</h2>
            <h3 className="brand__subtitle">小酌圖鑑：日本酒檢索網站</h3>
            <article className="brand__content">
              以圖鑑的形式，供搜索日本清酒資訊
              <br />
              整合多達3,000+酒品的檢索應用
              <br />
              依產地、酒名等獲得風味情報、排行
              <br />
              <a href="https://github.com/aki168/sakeholic" target="_blank">
                GitHub
              </a>{" "}
              |
              <a href="https://aki168.github.io/sakeholic/" target="_blank">
                DEMO
              </a>
            </article>
            <div className="brand__photo-list">
              <div className="brand__photo-list__one-item">
                <img src="point4z.png" alt="brand_img" className="mx-auto" />
              </div>
              <div className="brand__photo-list__two-item">
                <img src="point2.png" alt="brand_img" />
                <img src="point3.png" alt="brand_img" />
              </div>
              <div className="brand__photo-list__two-item">
                <img src="point1.png" alt="brand_img" />
                <img src="skill-s.png" alt="brand_img" />
              </div>
            </div>
          </div>
        </section>
        <section className="brand--wrap--none">
          <div className="brand">
            <h2 className="brand__title">專案經歷</h2>
            <h3 className="brand__subtitle">KOMORU 日租旅人平台</h3>
            <article className="brand__content">
              為突破舒適圈的年輕族群打造
              <br />
              依據用戶心理測驗結果，安排客制化活動
              <br />
              並提供精選日租青旅訂房服務
              <br />
              <a href="https://github.com/aki168/komoru" target="_blank">
                GitHub
              </a>{" "}
              |
              <a
                href="https://docs.google.com/document/d/1YBaLi97KjZeulR4dnGp-7TjwSsYcH7I7/edit?usp=sharing&ouid=101903928695152348684&rtpof=true&sd=true"
                target="_blank"
              >
                企劃書
              </a>
            </article>
            <div className="brand__photo-list">
              <div className="brand__photo-list__one-item">
                <img src="komoru01.jpg" alt="brand_img" className="mx-auto" />
              </div>
              <div className="brand__photo-list__two-item">
                <img src="komoru02.jpg" alt="brand_img" />
                <img src="komoru03.jpg" alt="brand_img" />
              </div>
              <div className="brand__photo-list__two-item">
                <img src="home-user.png" alt="brand_img" />
                <img src="skill.jpg" alt="brand_img" />
              </div>
            </div>
            <article className="brand__content">
              React Hooks、Nodejs Express
              <br />
              (Router/ Controller/ Model)
              <br />
              使用 MySQL 資料庫
              <br />
              前後端與第三方 API 以 Axios 溝通
              <br />
            </article>
            <article className="brand__content">
              前端：會員系統
              <br />
              訂單、優惠系統、JWT 身分驗證
              <br />
              基本資料/頭像、活動回饋專區
              <br />
              <br />
              後端：ERD 設計、資料表建立與調整
            </article>
          </div>
        </section>
        <section className="brand--wrap">
          <div className="brand">
            <h2 className="brand__title">Works</h2>
            <h3 className="brand__subtitle">
              日本牙醫診所網站
              <br />
              あき歯科クリニック表参道
            </h3>
            <article className="brand__content">
              依日本市場牙醫調查延伸
              <br />
              思考用戶端多以行動裝置預約為大宗
              <br />
              以 Bootstrap 的 mobile 高親和性設計
              <br />
              <a href="https://aki168.github.io/dental/" target="_blank">
                DEMO
              </a>
            </article>
            <div className="brand__photo-list">
              <div className="brand__photo-list__one-item">
                <img src="dental2.jpg" alt="brand_img" className="mx-auto" />
              </div>
              <div className="brand__photo-list__two-item">
                <img src="dental1.jpg" alt="brand_img" />
                <img src="dental3.jpg" alt="brand_img" />
              </div>
            </div>
          </div>
        </section>
        <section className="brand--wrap--none">
          <div className="brand">
            <h2 className="brand__title">專案經歷</h2>
            <h3 className="brand__subtitle">中國市場：影音遊戲娛樂 APP</h3>
            <article className="brand__content">
              結合遊戲、影視、直播等多元娛樂 APP <br />
              參與了從策畫到上線的完整歷程。
              <br />
              提出超過百種企劃提案，
              <br />
              實際帶領團隊執行 80 檔以上的活動，協助 PM 提出系統優化策略。
            </article>
            <div className="brand__photo-list">
              <div className="brand__photo-list__one-item">
                <img src="wowtch.jpg" alt="brand_img" className="mx-auto" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default WorksPage;
