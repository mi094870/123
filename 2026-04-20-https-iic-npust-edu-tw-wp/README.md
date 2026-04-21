# SafeRoute NT

這份專案已整理成可直接在瀏覽器開啟的靜態網頁版。

## 目前內容

- 通學安全儀表板首頁
- 學制篩選與學校切換
- 通學方式、顯示模式、更新頻率控制
- 縣域總覽地圖與學校周邊細部地圖
- 即時風險分數、建議路線、近期事件與摘要卡片
- 純前端架構，方便後續自行修改

## 如何開啟

直接用瀏覽器打開 `index.html` 就可以看到畫面。

如果你想用本機伺服器開啟，可以在專案資料夾執行：

```powershell
python -m http.server 8000
```

然後到：

```text
http://localhost:8000
```

## 檔案分工

- `index.html`：版面結構與元件
- `styles.css`：顏色、排版、RWD 響應式樣式
- `app.js`：示意資料、互動邏輯、地圖 SVG 渲染與儀表板更新

## 你之後可以怎麼改

- 想改版面：改 `index.html` 和 `styles.css`
- 想改功能：改 `app.js`
- 想換學校或事件資料：直接編輯 `app.js` 裡的 `schools`、`recentAccidents`、`weatherStates`
- 想串接真實資料：把 `app.js` 的示範資料改成 API `fetch()` 即可

## 備註

目前畫面中的資料是展示用範例，不是即時真實交通資料。
