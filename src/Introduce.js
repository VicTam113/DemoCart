import React from 'react'
import Title from './Title'

export default function Introduce() {
  return (
    <div>
<Title mainTitle="關於實作介紹" />

            <div className="introduce">
            <p><strong>介紹</strong></p>
            <p>這是一個簡單的三文治購物車，本作品主要目的是演示從網上資源學習到的React.js 網頁框架完成前端的實作示範。內容分頁包括產品清單，每件產品詳細資料，購物車結帳。</p>
            <p>頁面使用方法是在商品頁面選擇商品並按<button className="introduceButton"> 加入購物車</button>後，再按上面<button className="introduceButton2"> 購物車結帳</button>進行結帳，３５０元以下不提供外賣送貨，買滿３５０元包送貨。</p>
            <br/>
            <p><strong>學習程式語言</strong></p>
            <p>製作是使用Code editor-VS code，一步一步地按照網上資源學習在React.js框架 編寫程式語言，並從中學習到一些React概念例如16.80版本後的 usestate, usecontext Hook..。另外，實踐的過程中亦應用上基本程式語言包括.html／ .Css ／.Javascript..的代碼語言。</p>
            <p>完成實在後，使用GitHub, Cloudflare平台做網路儲存空間，放上互關聯網。</p>
            <br/><br/>
            <p>多謝收看. </p>
            <p/><p/><p/><p/>
            <p>Edited by Victor Tam </p>
            <p>2022-10-18</p>
            </div>
    </div>
  )
}
