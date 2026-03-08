# lab-react-router

這個 repo 用於練習 React Router v7。
官方文件：https://reactrouter.com。

目前 react-router 的最新版本是 7.13.1，因此這個 repo 會使用這個版本來練習。

## React Router v7

> The `react-router-dom`, `@remix-run/react`, `@remix-run/server-runtime`, and `@remix-run/router` have been collapsed into the `react-router` package

#### Upgrading from v6 to v7

以前 react-router 是核心邏輯，react-router-dom 是給瀏覽器用的。

自 v7 起，將兩者合併，也因此於 `package.json` 中宣告 `react-router` 相等於 `react-router-dom`。

#### Upgrading from Remix v2 to React Router v7

> React Router v7 is the next major version of Remix after v2.

自 v7 起，React Router 合併了原本的 Remix v2 的優點。

## Router Mode

Router Mode 有三種 strategy：

- Declarative mode：可以隨意把路由放在任何元件深處。
- Data mode：在 Declarative mode 的基礎上，增加了對 data loading、data mutation、defer loading 等功能的支援。
- Framework mode：強制使用檔案基礎路由（File-based routing），你的檔案夾結構就是你的路由結構。

從 Declarative mode 到 Framework mode，增加了更多的功能，但對 architectural 的掌控也下降。因此在選擇 Router Mode 時，需要根據專案需求來決定使用哪一種 strategy。

## Router Type

Router Type 有三種：

- HashRouter：透過 URL 的 `#` 錨點切換頁面，優點是完全不需要 Server 配置，適合部署在 GitHub Pages 這種靜態空間。
- BrowserRouter：使用 HTML5 History API，所以 URL 沒有 `#`、最美觀，但如果重新整理頁面，Server 若沒設定好會回傳 404。
- MemoryRouter：路由狀態存在記憶體中。主要用於單元測試（Testing）或非瀏覽器環境。
