<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  {/* font */}
  <link rel="stylesheet" href="./assets/font/Meiryo UI W53 Regular.ttf" />
  {/* link font-awesome */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
    integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  {/* reset */}
  <link rel="stylesheet" href="./assets/css/reset.css" />
  {/* link style */}
  <link rel="stylesheet" href="./assets/css/style.css" />
  <title>Aktio</title>
  <main className="main">
    {/* Header */}
    <div className="header_top">
      <h1 className="header_top__title">三益KD-1棟作業所専⽤Aktio注⽂ページ</h1>
      <p className="header_top__desc">Powered by iScape</p>
    </div>
    {/* breadcrumb */}
    <div className="container">
      <div className="breadcrumb">
        <ul className="breadcrumb_list">
          <li className="breadcrumb_item">
            <a className="breadcrumb_link" href="#!">
              ホーム
            </a>
          </li>
          <li className="breadcrumb_item">
            <a className="breadcrumb_link" href="#!">
              ⽔中ポンプ・⽔処理機械
            </a>
          </li>
          <li className="breadcrumb_item">
            <a className="breadcrumb_link" href="#!">
              ⽔中ポンプ
            </a>
          </li>
        </ul>
        <a className="breadcrumb_desc" href="#!">
          ⽔中ポンプ
        </a>
      </div>
    </div>
    {/* Main */}
    <div className="container">
      <article className="content">
        <div className="content_top">
          <h2>残⽔処理ポンプ</h2>
        </div>
        <figure className="content_img">
          <img
            className="content_img__1"
            src="./assets/img/aktio_1.jpg"
            alt="残⽔処理ポンプ"
          />
        </figure>
        <figcaption>
          <a className="content_note" href="#!">
            ⽔中ポンプ・⽔処理機械
          </a>
        </figcaption>
        {/* block 1 */}
        <div className="watt">
          <form className="watt_title" action="#!">
            呼称（商品コード）
            <div className="watt_form">
              <input type="radio" id="other" name="⽔中ポンプ・⽔処理機械" />
              <label className="watt_desc" htmlFor="other">
                以下に該当なし（メモ欄に記載）
              </label>
            </div>
            <div className="watt_form">
              <input type="radio" id="50l" name="⽔中ポンプ・⽔処理機械" />
              <label className="watt_desc" htmlFor="50l">
                最⼤吐出量50L/min[CU1 00001 001]
              </label>
            </div>
            <div className="watt_form">
              <input type="radio" id="60l" name="⽔中ポンプ・⽔処理機械" />
              <label className="watt_desc" htmlFor="60l">
                最⼤吐出量60L/min[CU3 00001 001]
              </label>
            </div>
            <div className="watt_form">
              <input type="radio" id="100l" name="⽔中ポンプ・⽔処理機械" />
              <label className="watt_desc" htmlFor="100l">
                最⼤吐出量100L/min[CU3 00001 006]
              </label>
            </div>
          </form>
        </div>
        {/* block 2 */}
        <div className="watt">
          <form className="watt_title" action="#!">
            * バンド
            <div className="watt_form">
              <input
                type="radio"
                id="バンド無し"
                name="⽔中ポンプ・⽔処理機械"
              />
              <label className="watt_desc" htmlFor="バンド無し">
                バンド無し
              </label>
            </div>
            <div className="watt_form">
              <input
                type="radio"
                id="ジュビリーバンド要"
                name="⽔中ポンプ・⽔処理機械"
              />
              <label className="watt_desc" htmlFor="ジュビリーバンド要">
                ジュビリーバンド要
              </label>
            </div>
            <div className="watt_form">
              <input
                type="radio"
                id="パワーロックバンド要"
                name="⽔中ポンプ・⽔処理機械"
              />
              <label className="watt_desc" htmlFor="パワーロックバンド要">
                パワーロックバンド要
              </label>
            </div>
          </form>
        </div>
        {/* block 3 */}
        <div className="watt">
          <form className="watt_title" action="#!">
            * ホース
            <div className="watt_form">
              <input
                type="radio"
                id="ホース無し"
                name="⽔中ポンプ・⽔処理機械"
              />
              <label className="watt_desc" htmlFor="ホース無し">
                ホース無し
              </label>
            </div>
            <div className="watt_form">
              <input
                type="radio"
                id="サクションホース要"
                name="⽔中ポンプ・⽔処理機械"
              />
              <label className="watt_desc" htmlFor="サクションホース要">
                サクションホース要
              </label>
            </div>
          </form>
        </div>
        {/* block mid */}
        <div className="content_mid">
          <input
            type="checkbox"
            name="補⾜説明"
            id="補⾜説明"
            className="content_checkbox"
            hidden=""
          />
          <label htmlFor="補⾜説明">
            補⾜説明
            <svg
              className="content_question"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
              />
            </svg>
          </label>
          <div className="content_mid__desc">
            <p>
              １）「要」を選択された場合はポンプと同数をお持ちしま
              <br />
              す。ポンプ台数と異なる場合はメモに記⼊ください。
              <br />
              ２）ホース要の場合は⻑さ、本数をメモに記⼊ください。
              <br />
              10m 20m 30m 50mが御座います <br />
              (サクション1吋は５mもあります)。
            </p>
            <label htmlFor="補⾜説明">
              <svg
                className="content_x"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
                />
              </svg>
            </label>
          </div>
        </div>
        {/* block bottom */}
        <div className="content_bottom">
          <div className="watt_bottom">
            <form className="watt_title__bottom" action="#!">
              数量
              <div className="watt_bottom__item">
                <div className="watt_form__bottom">
                  <input type="radio" id={1} name="数量" />
                  <label className="watt_desc" htmlFor={1}>
                    1
                  </label>
                </div>
                <div className="watt_form__bottom">
                  <input type="radio" id={2} name="数量" />
                  <label className="watt_desc" htmlFor={2}>
                    2
                  </label>
                </div>
                <div className="watt_form__bottom">
                  <input type="radio" id={3} name="数量" />
                  <label className="watt_desc" htmlFor={3}>
                    3
                  </label>
                </div>
                <div className="watt_form__bottom">
                  <input type="radio" id={4} name="数量" />
                  <label className="watt_desc" htmlFor={4}>
                    4
                  </label>
                </div>
                <div className="watt_form__bottom">
                  <input type="radio" id={5} name="数量" />
                  <label className="watt_desc" htmlFor={5}>
                    5
                  </label>
                </div>
                <div className="watt_form__bottom">
                  <input type="radio" id={6} name="数量" />
                  <label className="watt_desc" htmlFor={6}>
                    6
                  </label>
                </div>
                <div className="watt_form__bottom">
                  <input type="radio" id={7} name="数量" />
                  <label className="watt_desc" htmlFor={7}>
                    7
                  </label>
                </div>
              </div>
              <div className="watt_bottom__item">
                <div className="watt_form__bottom">
                  <input type="radio" id={8} name="数量" />
                  <label className="watt_desc" htmlFor={8}>
                    8
                  </label>
                </div>
                <div className="watt_form__bottom">
                  <input type="radio" id={9} name="数量" />
                  <label className="watt_desc" htmlFor={9}>
                    9
                  </label>
                </div>
                <div className="watt_form__bottom">
                  <input type="radio" id={10} name="数量" />
                  <label className="watt_desc" htmlFor={10}>
                    10
                  </label>
                </div>
                <div className="watt_form__bottom watt_form__bottom___11">
                  <input type="radio" id={11} name="数量" />
                  <label className="watt_desc" htmlFor={11}>
                    11以上（メモに記載）
                  </label>
                </div>
              </div>
            </form>
          </div>
          {/* block feedback */}
          <div className="content_feedback">
            <label htmlFor="feedback_補⾜説明">メモ（副資材等）</label>
            <textarea
              className="content_feedback__desc"
              name="補⾜説明"
              id="feedback_補⾜説明"
              defaultValue={""}
            />
          </div>
        </div>
        {/* button submit */}
        <div className="button">
          <input
            className="submit"
            type="submit"
            id="submit"
            defaultValue="買い物かごに追加"
          />
        </div>
      </article>
    </div>
    {/* price */}
    <div className="price">
      <div className="container container_price">
        <div className="price_list">
          <h3 className="price_title">単価</h3>
          <h3 className="price_currency__small">¥</h3>
          <input type="text" className="price_one" defaultValue={4500} />
        </div>
        <div className="price_list">
          <svg
            className="price_x"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              fill="currentColor"
              d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
            />
          </svg>
        </div>
        <div className="price_list">
          <h3 className="price_title">個数</h3>
          <input type="text" className="price_one" defaultValue={10} />
        </div>
        <div className="price_list">
          <h3 className="price_title">合計</h3>
          <h3 className="price_currency__large">¥</h3>
          <input type="text" className="price_total" defaultValue={45000} />
        </div>
      </div>
    </div>
  </main>
  {/* footer */}
  <footer className="footer_mobile">
    <div className="footer">
      <ul className="navbar">
        <li className="navbar_item">
          <a href="#!" className="navbar_link">
            <img src="./assets/img/aktio_4.svg" alt="" />
          </a>
        </li>
        <li className="navbar_item">
          <a href="#!" className="navbar_link">
            <img src="./assets/img/aktio_2.svg" alt="" />
          </a>
        </li>
        <li className="navbar_item">
          <a href="#!" className="navbar_link">
            <img src="./assets/img/aktio_3.svg" alt="" />
          </a>
        </li>
        <li className="navbar_item">
          <a href="#!" className="navbar_link">
            <img src="./assets/img/aktio_5.svg" alt="" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</>;
