export const docTwPrivacy = `# 隱私與個人資料保護政策

**Bagels 開發團隊**（以下簡稱「我們」）致力於保護您在使用 **Bagels**（以下簡稱「本服務」或「本 App」）時的隱私與個人資料。

本隱私與個人資料保護政策（以下簡稱「本政策」）依據中華民國（台灣）《個人資料保護法》（以下簡稱「個資法」）及相關法規制定。本政策旨在說明我們如何蒐集、處理與利用您的個人資料。請您在使用本服務前仔細閱讀本政策，以便瞭解您的權益。您可以隨時在 App 的設定中查閱本政策。

---

## 第一條：蒐集個人資料之特定目的
我們將為以下特定目的蒐集、處理及利用您的個人資料（項目及代號依據中華民國法務部公告之「個人資料保護法之特定目的及個人資料類別」）：
1. **【040 行銷】**：用於向您發送個性化音樂推薦、推播訊息及本服務之最新功能推廣。
2. **【069 契約、類似契約或其他法律關係事務】**：用於您的帳號註冊、身分驗證、會員訂閱、付費點數核算及履行本服務之服務條款。
3. **【135 資(通)訊服務】**：提供本應用程式內之 AI 聊天、音樂播放管理、播放清單封面顯示等基本 App 功能。
4. **【136 資(通)訊與資料庫管理】**：管理及備份您的對話紀錄、收藏播放清單、自定義封面以及個人偏好設定。
5. **【148 網路購物及其他電子商務服務】**：處理 App 內訂閱、付費額度交易等經由 App Store 處理之帳務紀錄。
6. **【157 調查、統計與研究分析】**：分析用戶使用習慣、偏好及系統錯誤報告，以進行統計分析，改善我們的 AI 模型及 App 使用體驗。

---

## 第二條：蒐集之個人資料類別
當您使用本服務時，我們可能會蒐集以下類別之個人資料（代號依據中華民國法務部公告之「個人資料保護法之特定目的及個人資料類別」）：
1. **【C001 辨識個人者】**：您的顯示名稱、大頭貼、電子郵件地址、以及第三方登入平台之不重複帳號識別碼（如 Apple ID 識別碼、Google 帳號識別碼）。
2. **【C011 個人描述】**：您自行上傳至本 App 作為播放清單封面之圖片或相片。
3. **【C035 個性】**：您的音樂喜好偏好、收藏清單、播放記錄、以及您在使用 AI 對話功能時主動輸入之文字對話紀錄。
4. **【C093 財務交易】**：您的訂閱方案種類、交易時間、交易金額（所有支付流程皆經由 Apple App Store 處理，我們**不會**蒐集或儲存您的信用卡卡號、安全碼等敏感支付資訊）。
5. **【設備與網路識別資料】**：您的 IP 位址、設備型號、作業系統版本、App 版本、系統語言設定、當機日誌（Crash Logs）及其他系統分析數據。

---

## 第三條：個人資料利用之期間、地區、對象及方式
1. **利用期間**：
   * 自您開始註冊或登入使用本服務之日起，至您申請註銷帳號或本服務停止營運之日止。
   * 如個別個人資料之保存，因相關法令規定、訴訟或防範欺詐之必要而需延長保存者，則依其規定。
2. **利用地區**：
   * 本服務之後端雲端服務主要部署於 **Google Cloud Platform (GCP)** 伺服器，您的個人資料將儲存及處理於 GCP 合規之伺服器及資料中心所在地區（主要包含台灣或亞太地區）。
3. **利用對象**：
   * 僅限於我們、為本 App 提供必要支持服務之關聯團隊，以及必要的第三方合作夥伴（例如提供帳號驗證的 Firebase Auth、提供 AI 模型運算之 Google Cloud API）。
   * **我們承諾絕不會向任何無關之第三方出售、租用或未經許可披露您的個人資料或使用習慣。**
4. **利用方式**：
   * 將個人資料輸入雲端伺服器進行身分驗證、資料備份、資料分析。
   * 將您輸入之對話與生圖提示詞傳送至 AI 接口（如 Gemini API）以進行即時回覆與圖像生成（AI 模型僅處理您傳送的文字，我們亦會限制 AI 不得將您的對話用於公開訓練）。
   * 於您的裝置端本地讀取您的設定，以配合您的喜好調整介面。

---

## 第四條：蘋果音樂 (Apple Music Kit) 與裝置權限之使用說明
為提供本 App 的核心功能，我們會向您的 iOS 裝置申請以下權限，您可隨時於 iOS「設定」中變更這些權限：
1. **媒體與 Apple Music 存取權限**：
   * **蒐集與利用方式**：本 App 使用 iOS 系統的 MusicKit API，在您裝置本地存取您的 Apple Music 資料庫（讀取您的播放清單、最近播放、所有歌曲等）以進行播放與展示。
   * **不儲存 Token 承諾**：我們完全使用 iOS 原生安全通道與 Apple 系統互動。我們**不會**將您的 Apple Music 個人帳戶登入憑證或 Access Token 上傳、儲存於我們的伺服器，亦不會收集您的音樂庫用於廣告追蹤。
2. **相簿存取權限**：
   * **蒐集與利用方式**：當您上傳照片作為自定義播放清單封面，或欲將 AI 生成之封面圖片儲存至您的裝置相簿時，本 App 會請求相簿權限。上傳之相片僅會存儲於我們租用的 GCP 安全資料庫中，作為展示您專屬播放清單封面的唯一用途，不進行任何其他處理。

---

## 第五條：當事人權利之行使（個資法第 3 條）
依據中華民國《個人資料保護法》第 3 條規定，您就我們所保存之個人資料，享有以下權利：
1. **查詢或請求閱覽**您本人的個人資料。
2. **請求製給複製本**。
3. **請求補充或更正**（當您發現資料有遺漏或不正確時）。
4. **請求停止蒐集、處理或利用**您的個人資料。
5. **請求刪除**您的個人資料。
*   **【行使權利之管道與方式】**：
    *   **自我管理**：您可以直接在 App 內的個人檔案或設定頁面中查看、更正您的顯示名稱或大頭貼。
    *   **物理刪除（註銷帳號）**：您可以透過 App 設定中的「註銷帳號」按鈕直接行使刪除權。一旦您點擊確認註銷，系統將物理性且不可逆地刪除您在雲端資料庫中所有的關聯個人資料、歷史聊天紀錄及自定義圖片。
    *   **聯繫信箱**：您亦可寄信至我們的客服信箱 \`douglasdouglasskikcn@outlook.com\` 提出您的申請，我們將於法定期限內（通常於 15 日內，必要時得延長 15 日）回覆處理結果。

---

## 第六條：資料保護安全防護措施
我們採用符合業界標準的資訊安全技術與管理措施以保護您的個人資料：
1. **加密傳輸**：所有在 App 與後端伺服器之間傳輸的數據均採用 SSL/TLS 加密協定。
2. **加密儲存**：後端資料庫中的敏感個資及對話紀錄皆進行加密儲存（Cryptography at Rest）。
3. **存取控制**：我們對能存取數據的內部開發人員實施嚴格的最小權限原則，並使用 Google Cloud GCP 的先進安全防護系統。
4. **漏洞防範**：定期進行系統安全漏洞掃描與更新維護，防止資料庫遭受未授權之存取。

---

## 第七條：第三方 SDK 服務與外部連結
本服務整合了第三方 SDK 以優化體驗。這些第三方將依據其各自之隱私政策處理您的部分設備數據：
*   **Firebase SDK（包含 Auth、Crashlytics）**：用於用戶登入驗證及收集崩潰日誌，詳見 [Google 隱私政策](https://policies.google.com/privacy)。
*   **外部平台連結**：本 App 內之熱門影片點擊後會引導您至外部平台（如 YouTube）。請注意，該等外部平台可能使用 Cookie 或廣告標識符追蹤您的行為，其隱私實踐不受本政策約束，請參閱各該平台之隱私政策（如 [YouTube 服務條款](https://www.youtube.com/t/terms)）。

---

## 第八條：未成年人個人資料保護
我們非常重視未成年人之個人資料安全。若您為未滿 18 歲之未成年人，您在使用本 App 並提供您的個人資料前，應先取得父母或監護人之同意。若我們發現有未經法定代理人同意而收集未成年人個人資料之情事，我們將在知悉後立即予以刪除。

---

## 第九條：隱私政策之修改與公告
我們保留隨時修改本隱私政策之權利。當本政策有重大修訂時，我們將於本 App 內以公告或推播方式通知您，並更新本政策下方之更新日期。若您在修訂公告後繼續使用本服務，即表示您已接受修訂後的隱私政策。

---

## 第十條：客服與隱私權聯絡信箱
如果您對本政策或您的個人資料保護有任何問題、建議或投訴，請聯絡我們：
*   **客服與隱私權處理信箱**：douglasdouglasskikcn@outlook.com
*   **最新更新日期**：2026 年 7 月 3 日`;

export const docTwTerms = `# 服務條款與最終用戶許可協議 (EULA)

歡迎您使用 **Bagels**（以下簡稱「本應用程式」或「本服務」）。本協議為您（以下簡稱「用戶」）與 **Bagels 開發團隊**（以下簡稱「本團隊」或「我們」）之間就使用本服務所締結之法律契約。

> [!IMPORTANT]
> **【合約審閱期與同意聲明】**
> 依據中華民國（台灣）《消費者保護法》之規定，本服務特此提示：請於點擊「同意」或開始註冊、登入及使用本服務前，詳細閱讀本協議所有條款。**您點擊「同意並繼續」、「開始使用」或以 any 方式存取、使用本服務，即代表您聲明您已享有合理之契約審閱期（至少三日），並完全理解且同意接受本協議所有條款之約束**。若您不同意本協議，請勿點擊同意或使用本服務。

---

## 第一條：用戶資格與法定代理人同意
1. **年齡限制**：您必須年滿 18 歲（或您居住地區之法定成年年齡）方可建立帳戶並使用本服務。
2. **法定代理人同意**：若您未滿 18 歲，您在使用本服務前，應與您的父母或法定代理人共同閱讀本協議，並必須在取得您的父母或法定代理人明示同意後，方得使用本服務或進行付費購買。當您開始使用本服務時，即視為您的父母或法定代理人已閱讀、理解並同意本協議之所有內容。

---

## 第二條：服務內容與技術規範
本應用程式為一款結合人工智慧（AI）與音樂庫管理之行動應用程式，其主要核心服務包含：
1. **蘋果音樂資料庫 (Apple Music) 連結**：透過 iOS 系統原生 MusicKit 框架，讀取用戶之音樂庫、播放清單、最近播放歷史，並提供播放與整理服務。
2. **自定義與 AI 封面生成**：用戶可自行上傳相片，或透過本應用程式內置之 AI 圖像生成技術，為您的播放清單生成或替換專屬封面。
3. **AI 音樂推薦與導入**：內置 AI 聊天助手，可根據用戶輸入之對話內容推薦歌曲，並協助用戶將推薦歌曲一鍵導入其 Apple Music 資料庫中。
4. **熱門音樂影片跳轉**：在應用程式內展示熱門音樂錄影帶之預覽視窗，用戶可點擊跳轉至第三方影音平台（如 YouTube）進行觀看。

---

## 第三條：帳號註冊與安全管理
1. **註冊管道**：本服務支援您使用第三方帳號（如 Apple ID、Google 帳號）或電子郵件進行登入與建立帳號。
2. **保管責任**：您應妥善保管您的登入憑證與帳號安全，凡經由您的帳號所進行之所有行為（包括但不限於付費訂閱、AI 額度消耗、上傳圖片等），均視為您本人之行為，您應負完全責任。
3. **帳號註銷**：您可隨時透過本應用程式內之「設定」申請註銷帳號。**請注意：帳號一旦註銷，您的所有帳號資訊、對話紀錄、自定義封面、以及尚未消耗之 AI 額度將被物理清除且無法恢復，我們對此不承擔任何退費或補償責任。**

---

## 第四條：智慧財產權與用戶生成內容 (UGC)
1. **本服務之智慧財產權**：本應用程式之軟體程式碼、介面設計、商標、AI 演算法、提示詞模板及相關素材，均屬於本團隊或授權本團隊使用之權利人所有，受著作權法、商標法及其他智慧財產權法律保護。
2. **用戶上傳內容之保證**：
   * 您上傳至本服務之自定義圖片，其著作權仍歸您或原權利人所有。
   * 您保證您所上傳或引用之圖片具有合法之所有權或已取得權利人授權，**嚴禁上傳任何侵犯知名智慧財產權（IP）、他人著作權、商標權、肖像權或隱私權之內容**。
3. **UGC 授權範圍**：
   為了向您提供服務，您同意授予本團隊一項免費、非獨佔、全球性、可轉授權、技術性的使用許可，允許我們在提供 App 功能之必要範圍內，對您上傳的圖片進行儲存、快取、調整大小及本地展示。
4. **禁止發布之內容**：
   您同意在使用本服務時，不得生成或傳播以下內容。一經發現，我們有權逕行刪除、封鎖，並得限制或終止您的帳號使用權利：
   * 侵害他人智慧財產權或商業秘密者。
   * 涉及未成年人權益侵害、色情、暴力、仇恨言論或非法活動者。
   * 涉及政治敏感、種族歧視、性別歧視、地域歧視或宣揚戰爭者。
   * 其他違反中華民國法律或公序良俗之內容。

---

## 第五條：AI 服務條款與免責聲明
1. **AI 額度使用規則**：
   * 用戶帳號所分配之 AI 對話額度與 AI 繪圖額度具有效期限制。**付費購買之 AI 額度自付費完成之日起 30 天內有效，逾期未消耗完畢之額度將自動失效且不予退還或折現**。
   * 額度消耗依系統實際扣減為準。如遇網路中斷或非本服務伺服器原因導致之生成中斷，已扣減額度恕不補發。
2. **AI 生成內容之特性與免責**：
   * **技術局限性**：AI 生成之文字、推薦歌曲、圖像等內容，均由人工智慧模型依據您的提示詞自動計算產生。**AI 可能會犯錯、產生虛構資訊或「幻覺」**（如推薦不存在的歌曲或歌手）。
   * **非專業意見**：AI 生成之內容僅供參考，**您應自行審慎評估，不應將其視為任何領域的專業意見（如醫療、法律或財務建議）**。
   * **版權免責**：本團隊不保證 AI 生成之圖片在所有情況下均不與現有他人著作產生雷同，亦不保證其能取得 any 著作權保護。用戶因使用 AI 生成圖片所產生之任何爭議，應由用戶自行承擔。

---

## Sixth 條：蘋果音樂 (Apple Music) 連結與第三方免責
1. **系統原生授權**：本服務與 Apple Music 之連接完全建立在您裝置本地之 MusicKit SDK。我們不接觸、不儲存、亦不傳輸您的 Apple Music 帳戶 Token 至本團隊之後端伺服器。
2. **訂閱與播放限制**：您理解並同意，App 內之播放與導入功能依賴您 Apple 帳號本身之 Apple Music 訂閱狀態。如因 Apple Music 服務中斷、您的訂閱過期或 Apple 官方限制導致無法播放或導入歌曲，本團隊概不負責。
3. **外部影片連結**：
   本服務提供之「熱門影片」僅為指向第三方平台（如 YouTube）之超連結。超連結之內容、播放介面、廣告及相關使用規範，完全由該第三方平台控制。本團隊不對該第三方平台之內容、安全性或其是否持續可用提供 any 保證，亦不承擔 any 賠償責任。

---

## 第七條：付費訂閱、帳務與退款說明
1. **自動續費訂閱**：本服務之會員訂閱採用 Apple App Store 內購機制（IAP）。一旦您確認訂閱，費用將透過您的 Apple ID 帳戶扣款。除非您在當期訂閱結束前至少 24 小時關閉自動續費，否則訂閱將自動續期並扣款。
2. **退款處理機制**：
   * 依據台灣《消費者保護法》第 19 條及《通訊交易解除權合理例外情事適用準則》，本服務提供之付費訂閱及 AI 生圖/對話點數，屬於「非以有形媒介提供之數位內容或一經提供即為完成之線上服務」，於您開始使用服務或完成購買後，即排除 7 日無條件退貨權利。
   * 所有付款交易均由 Apple 公司處理。**如您需要申請退款，您必須直接向 Apple App Store 提交退款申請，並由 Apple 公司依其政策審查決定。本團隊在技術上與法律上均無法直接辦理 Apple IAP 之退款。**

---

## 第八條：服務中斷與責任限制
1. **服務中斷**：本團隊將盡力維持本服務之穩定運作。但因伺服器維護、系統升級、電信網路中斷、第三方服務故障（如 Google Cloud Platform 中斷或 Apple Music 服務異常）或不可抗力事件，導致服務暫停、中斷或延遲，本團隊不對用戶承擔 any 賠償責任。
2. **責任上限**：在台灣法律允許之最大範圍內，本團隊因本協議或本服務所應承擔之損害賠償責任總額（不論是基於契約、侵權行為或其他法律依據），**均以您在該爭議發生前三個月內就本服務實際支付給我們的金額為最高上限**。

---

## 第九條：協議之終止
1. **違規終止**：若您違反本協議之任何約定，或您的行為侵害 any 第三方權利、違反法令，本團隊有權不經事前通知，立即暫停或終止您對本服務之全部或部分使用權限，且不予退還 any 已付費用或未消耗額度。
2. **終止效力**：本協議因 any 原因終止後，您應立即停止使用本服務。

---

## 第十條：準據法
本協議之效力、解釋、履行及爭議解決，均以**中華民國（台灣）法律**為準據法。

---

## 第十一條：聯絡管道
若您對本協議有 any 疑問，或欲進行權利主張，請透過以下信箱與我們聯絡：
*   **客服信箱**：douglasdouglasskikcn@outlook.com
*   **更新日期**：2026 年 7 月 3 日`;

export const docJpPrivacy = `# プライバシーポリシー（個人情報保護方針）

**Bagels開発チーム**（以下「当チーム」又は「当社」）は、本アプリケーション **Bagels**（以下「本サービス」或いは「本 App」）の提供に伴い、ユーザーの個人情報の重要性を認識し、その適正な取り扱い及び安全管理に努めることをお約束します。

本プライバシーポリシー（以下「本ポリシー」）は、日本国の「個人情報の保護に関する法律（以下「個人情報保護法」）」及びそのガイドラインに基づき、当チームがユーザーの個人情報をどのように収集、利用、保管、及び開示するかについて説明するものです。本サービスを利用される前に、本ポリシーをご一読ください。本ポリシーはアプリ内の設定画面等からいつでもご確認いただけます。

---

## 第1条（個人情報の「利用目的」の特定）
当チームは、収集した個人情報を、個人情報保護法に従い以下の利用目的の範囲内でのみ利用します。ユーザーの事前の同意がある場合、又は法令に基づく場合を除き、目的外利用は行いません。
1. **【サービスの提供及び会員管理】**：アカウント登録、ログイン認証、有料プラン（定期購読）の管理及び決済情報の検証。
2. **【パーソナライズ及びAIによる推奨】**：ユーザーの選曲好み、プレイリストの学習による楽曲推薦、並びに内蔵AIチャット応答及びAIプレイリストカバー生成の演算処理。
3. **【データのバックアップ及び同期】**：プレイリスト設定、お気に入り項目、及びカスタムカバー画像をクラウドストレージ（GCP）での同期・バックアップ。
4. **【サービス改善と不具合分析】**：利用傾向の統計分析、アプリクラッシュ時のデバッグ分析、AI選曲精度の向上。
5. **【サポート対応】**：ユーザーからのお問い合わせ（技術的トラブル、開示請求等）への対応。

---

## 第2条（取得する個人情報のカテゴリ）
当チームは、前条に定める利用目的を達成するため、本アプリを通じて以下の個人情報を取得します：
1. **【アカウント識別情報】**：ユーザーの表示名、プロフィール写真、メールアドレス、及びサードパーティログインID（Apple ID / Googleアカウントのシステム識別子）。
2. **【ユーザー作成コンテンツ (UGC)】**：プレイリストカバーとしてユーザー自身がアップロードしたカスタム画像。
3. **【利用データ及び好み】**：お気に入り追加履歴、プレイリストのタイトル、楽曲再生履歴、並びにAIアシスタント機能とのチャット対話履歴（テキスト形式）。
4. **【決済メタデータ】**：有料プラン購読履歴、購入日時、金額（決済はApple App Storeが直接処理するため、当チームがクレジットカード番号やセキュリティコード等の金融データを直接取得・保存することはありません）。
5. **【デバイス及び技術ログ】**：IPアドレス、デバイス型番、OSバージョン、アプリ動作ログ、クラッシュレポート。

---

## 第3条（個人情報の保存期間、委託及び外国での取り扱い）
1. **保存期間**：
   * 取得した個人情報は、アカウントの退会（アカウント削除）完了時、又は本サービスの提供終了時まで保存されます。
   * ただし、税法上の要件、係争への対応、又はセキュリティ上の必要から、特定の個人データを法令に規定される最小限の期間、引き続き保有する場合があります。
2. **クラウドホスティング及び「業務委託」の定義**：
   * 本サービスのデータベース及びサーバーは、**Google Cloud Platform (GCP)** を使用しています。ユーザーの個人データを同クラウドサービスへアップロード・管理することは、個人情報保護法上の「第三者提供」には該当せず、「業務委託（委託）」に該当します。
3. **データの保管国・地域（外的環境の把握）**：
   * 本サービスで収集された個人データは、**アメリカ合衆国（米国）**に所在する Google Cloud Platform のデータセンターに保管されます。
4. **外国における個人情報の保護制度に関する公表項目**：
   個人情報保護法に基づき、データ保管先である外国（米国）の個人情報保護制度及び当チームが講じる措置について以下の通り公表します：
   * **保管先国名**：アメリカ合衆国（米国）
   * **米国の個人情報保護に関する制度の概要**：米国には連邦レベルでの包括的な個人情報保護法は存在しませんが、分野別の連邦法（金融や医療分野等）や、カリフォルニア州の CCPA（カリフォルニア州消費者プライバシー法）などの州レベルでの包括的なプライバシー法が存在します。また、米国は APEC の CBPR（経済協力開発機構のプライバシーガイドラインに準拠したルール）システムに参加しています。
   * **当チーム及びクラウド事業者が講じる安全管理措置**：
     * クラウドサービス事業者（Google LLC）は、国際安全基準（ISO/IEC 27001、ISO/IEC 27017、ISO/IEC 27018）の認証を受けており、強固な物理的・技術的安全管理措置を導入しています。
     * 当チームは、データ転送時の通信暗号化（SSL/TLS）、データベースでの保管データの暗号化（AES-256）、及びシステムへのアクセス権を最小限に制限する「アクセス制御（IAM最小権限原則）」などの技術的安全管理措置を講じています。
     * 当チームは、米国の個人情報保護に関する法制度の変更について定期的に確認を行い、安全管理措置への影響を把握（外的環境の把握）しています。

---

## 第4条（Apple Music連携及びデバイス権限の取り扱い）
本アプリのミュージック関連機能及び画像関連機能を提供するため、以下のデバイス権限を取得します。これらの権限はiOSの設定画面からいつでも無効にできます：
1. **メディアとApple Musicライブラリへのアクセス権**：
   * **取得目的**：本アプリは、デバイス上のiOS MusicKit SDKを介して、ユーザーのApple Musicライブラリ（曲、プレイリスト、最近再生した項目など）にローカルアクセスし、再生及び同期を行います。
   * **セキュリティ保証**：当チームは、ユーザーのApple Musicアクセス用トークンをサーバーへアップロード又は保存することは一切しません。また、ユーザーのミュージックライブラリデータを広告配信事業者やその他の第三者に提供・販売することはありません。
2. **写真ライブラリ（カメラロール）へのアクセス権**：
   * **取得目的**：プレイリストカバー画像としてのカスタム写真アップロード、又はAI生成画像をデバイス相簿に保存する際にのみアクセスします。アップロードされた画像はGCPのセキュアなデータベースにのみ保存され、本アプリ内のカバー表示以外の用途には使用しません。

---

## 第5条（第三者提供の制限）
当チームは、個人情報保護法第23条に規定される例外（法令に基づく場合、人命・身体の保護に緊急を要する場合など）を除き、ユーザーの事前の同意を得なく、個人情報を第三者に提供、共有、又は販売することはありません。

---

## 第6条（個人情報の「安全管理措置」）
当チームは、取得した個人情報の漏洩、滅失、又は毀損を防ぐため、以下の安全管理措置を講じています：
1. **転送時の暗号化**：アプリとクラウドサーバー間の通信はすべてSSL/TLS暗号化により保護されます。
2. **保存データの暗号化**：サーバーに保存されるすべての個人データ及びチャット履歴は、データベースレベルで暗号化（AES-256規格等による暗号化）されています。
3. **アクセス制御**：データにアクセスできる内部開発担当者を最小限に制限し、Google Cloud GCPが提供する最高水準のアクセス制御（IAMによる最小権限原則）を適用しています。
4. **監視体制**：不正アクセスや脅威を検知するための脆弱性チェック及びシステム監視体制を維持しています。

---

## 第7条（本人の権利：開示等の請求手続き）
個人情報保護法に基づき、ユーザーは当チームが保有する自身の個人データについて、以下の請求を行うことができます：
*   個人データの**利用目的の通知、開示、訂正、追加、削除、利用の停止、又は第三者提供の停止**。
*   **【アプリ内での自己削除手続き】**：
    *   ユーザーは、本アプリの「設定」内の「アカウント削除」ボタンを実行することで、自身の権利を即座に行使することができます。アカウント削除の実行により、クラウド上のアカウント情報、プレイリストカスタム画像、チャット会話履歴を含むすべての関連個人データが物理的かつ不可逆的に消去されます。
*   **【メールでのお手続き】**：
    *   その他開示等の詳細なご請求は、当チームのサポートメール（\`douglasdouglasskikcn@outlook.com\`）までご連絡ください。ご本人確認を行った上で、法に基づき適切に対応いたします。

---

## 第8条（サードパーティSDK及び外部リンク）
1. **サードパーティSDK**：ログイン認証及びクラッシュレポートの収集のために、Firebase SDKを使用しています（[Googleプライバシーポリシー](https://policies.google.com/privacy)が適用されます）。
2. **外部リンク**：アプリ内の動画遷移からYouTube等のサードパーティサイトに遷移した場合、当該サイトでの個人情報収集は当社の管理範囲外となり、それぞれの外部サイトのプライバシーポリシーが適用されます。

---

## 第9条（未成年者の個人情報保護）
18歳未満の未成年者であるユーザーが個人情報を提供する場合は、親権者等の法定代理人の同意または監督のもとで行うようお願いいたします。未成年者のデータが法定代理人の同意なく収集されたことが判明した場合、当チームは速やかにデータを削除します。

---

## 第10条（プライバシーポリシーの改定）
当チームは、サービス内容の変更や法令の改正に伴い、本ポリシーを随時改定することがあります。重大な変更がある場合は、アプリ内での告知を行い、本ポリシーの最終更新日を更新します。

---

## 第11条（個人情報取扱事業者に関する表示・お問い合わせ先）
*   **名称**：Bagels開発チーム（個人開発チーム代表）
*   **お問い合わせ・相談窓口**：douglasdouglasskikcn@outlook.com
*   **最終更新日**：2026年7月3日`;

export const docJpTerms = `# 利用規約及びエンドユーザー使用許諾契約 (EULA)

本利用規約及びエンドユーザー使用許諾契約（以下「本規約」）は、**Bagels**（以下「本アプリ」又は「本サービス」）の提供元である **Bagels開発チーム**（以下「当チーム」又は「当社」）と、本サービスを利用するユーザー（以下「ユーザー」）との間で合意される法律上の契約です。

> [!IMPORTANT]
> **【規約の確認及び同意声明】**
> 日本国「消費者契約法」に基づき、本規約にはユーザーの権利義務に関する重要事項が定められています。本アプリのアカウント作成、サインイン、又はその他の方法による利用開始をもって、ユーザーは本規約のすべての内容を十分に理解し、これに同意したものとみなされます。本規約に同意いただけない場合は、本アプリの利用を中止してください。

---

## 第1条（利用資格及び未成年者による利用）
1. **年齢制限**：ユーザーがアカウントを作成し本サービスを利用するには、18歳（又は居住地における法定成年年齢）に達している必要があります。
2. **親権者の同意**：18歳未満の未成年者であるユーザーは、本サービスを利用（特に有料プランの定期購読やAIポイントの購入を含みます）する前に、親権者等の法定代理人の同意を得る必要があります。未成年者であるユーザーが本サービスを利用した場合、法定代理人の同意を得て利用しているものとみなします。

---

## 第2条（サービス内容と技術的制限）
本アプリは、人工知能（AI）技術とミュージックライブラリ管理を融合したアプリケーションであり、以下の機能を提供します：
1. **Apple Music接続**：iOS標準のMusicKitフレームワークを使用し、ユーザーのデバイスローカル内の音楽ライブラリ、プレイリスト、再生履歴を読み込み、再生及び管理を行います。
2. **プレイリストカバー画像のカスタマイズ及びAI生成**：ユーザー自身の画像のアップロード、又は内蔵のAI画像生成技術を利用し、プレイリストのカスタムカバー画像を生成・変更できます。
3. **AI選曲推奨及びライブラリ追加**：内蔵のAIアシスタントを通じて、会話形式で選曲の推奨を受け、推奨された楽曲を一クリックで自身のApple Musicライブラリに追加できます。
4. **ミュージックビデオリンク**：アプリ内で人気のミュージックビデオのプレビューを表示し、タップすることで外部動画プラットフォーム（YouTube等）へ遷移して視聴できます。

---

## 第3条（アカウント登録、管理及び削除）
1. **サインイン方法**：本サービスは、サードパーティアカウント（Apple ID、Googleアカウント等）又はメールアドレスによるサインインをサポートしています。
2. **自己責任の原則**：ユーザーは自己のログイン認証情報を厳重に管理し、親権者等の第三者に開示してはなりません。ユーザーのアカウントを通じて行われたすべての行為（有料購読、AIクレジットの消費、画像のアップロード等を含みますが、これらに限りません）は、すべてユーザー本人の行為とみなされます。
3. **アカウント削除（退会）**：ユーザーはアプリ内の「設定」画面からいつでもアカウント削除を申請できます。**注意：アカウントの削除が完了すると、これまでのチャット履歴、カスタムカバー画像、及び未使用のAIクレジットを含むすべてのデータが物理的に削除され、復元することはできません。これに伴う返金や補償は一切行えませんのでご了承ください。**

---

## 第4条（ユーザー生成コンテンツ (UGC) 及び知的財産権）
1. **本サービスに関する知的財産権**：本アプリのプログラム、UIデザイン、商標、AIアルゴリズム、プロンプトテンプレート等は、当チーム又は当チームにライセンスを許諾した権利者に帰属します。
2. **アップロード画像の保証**：
   * ユーザーがアップロードするカスタム画像の著作権は、ユーザー又は元の権利者に留保されます。
   * ユーザーは、アップロードする画像について適法な権利を有していること、及び**著名なキャラクター等の知的財産権（IP）、第三者の著作権、肖像権、プライバシー権等を一切侵害していないこと**を表明し、保証するものとします。
3. **ライセンス付与**：
   ユーザーは当チームに対し、本アプリの提供に必要な範囲内で、アップロードされた画像を保存、キャッシュ、サイズ調整、及び本地表示するための、無償、非独占的、全世界的、かつサブライセンス可能な技術的利用ライセンスを付与するものとします。
4. **禁止事項**：
   ユーザーは、本サービスを利用して以下のコンテンツの生成、アップロード、又は送信を行ってはなりません。違反が確認された場合、当チームは通知なく当該コンテンツの削除やアカウントの利用制限を行う権利を留保します：
   * 他者の著作権、商標権等の知的財産権や肖像権を侵害する内容。
   * 児童ポルノ、暴力、虐待、ヘイトスピーチ、違法行為を助長する内容。
   * 政治的敏感事項、人種差別、性差別、ジェンダー対立、地域差別、その他公序良俗に反する内容。

---

## 第5条（AIサービスに関する制限及び免責事項）
1. **AIクレジット（ポイント）の使用ルール**：
   * ユーザーのアカウントに割り当てられるAIチャットクォータ及びAI画像生成クォータには有効期限があります。**有料で購入されたAIクレジットは、購入日から30日間有効であり、有効期限内に消費されなかった未使用ポイントは自動的に失効します。失効したポイントの返金、延長、又は換金は一切行いません。**
   * 通信切断やサードパーティのサーバー障害等、当チームの支配の及ばない理由により生成プロセスが中断された場合、消費されたクレジットの補填はいたしかねます。
2. **AI生成コンテンツに関する免責**：
   * **技術的限界**：AIの出力する文章、選曲推奨、生成画像は、AIモデルが自動計算により出力するものです。**AIはハルシネーション（誤情報）を出力する可能性があり、存在しない楽曲を推奨するなどの誤りが生じる場合があります。**
   * **非専門性**：AIの回答は参考用であり、**ユーザーは自己の責任で内容を確認するものとし、医療、法律、財務等の専門的な助言として解釈してはなりません。**
   * **雷同性及び著作権**：当チームは、AIが生成する画像が既存の著作物と雷同しないこと、又は特定の著作権保護を受けられることを保証しません。AI生成画像に起因する紛争はユーザー自身が解決するものとします。

---

## 第6条（Apple Music連携及び外部動画プラットフォーム）
1. **ローカル処理の原則**：本アプリは、デバイス上のiOS MusicKit SDKを介してローカルで直接接続します。当チームは、ユーザーのApple Musicアクセス用トークンをサーバーへアップロード又は保存することはしません。
2. **機能制限**：楽曲の再生やプレイリストのインポートは、ユーザーのApple IDに紐づく有効なApple Musicの契約状態に依存します。Apple Musicのサービス中断や契約切れに起因する不具合について、当チームは一切の責任を負いません。
3. **外部リンク**：アプリ内の動画窓から遷移するYouTube等の外部プラットフォームのコンテンツ及び再生インターフェースは、各プラットフォームが管理するものです。当チームは外部サイトの内容の正確性、安全性、及び可用性について一切保証せず、免責されるものとします。

---

## 第7条（有料プラン、決済及び返金）
1. **自動更新の定期購読**：本アプリの有料プランはApple App Storeの決済システム（IAP）を利用しています。お支払いはユーザーのApple IDアカウントに対して請求され、購読期間終了の24時間前までに自動更新を解除しない限り、自動的に更新され請求されます。
2. **返金と特定商取引法に関する特記**：
   * デジタルコンテンツ及びオンライン即時提供サービスの特性上、購入及び利用開始後は特定商取引法に定める返品・返金（クーリング・オフ等）の対象外となります。
   * すべての決済はApple社によって処理されます。**返金を希望される場合は、ユーザー自身がApple App Storeの購入履歴等からApple社に直接返金申請を行う必要があります。当チームは独自の返金処理権限を有しません。**

---

## 第8条（免責事項及び責任の制限）
1. **消費者契約法の適用**：本規約の免責規定にかかわらず、当チームの「故意又は重大な過失」に起因してユーザーに生じた損害については、本規約における免責規定は適用されず、当社は法に基づきその損害（特別の事情から生じた損害を除きます）を賠償します。
2. **責任の上限**：
   当チームの軽過失（重大な過失を除く過失）による債務不履行又は不法行為によりユーザーに生じた損害の賠償額は、**当該損害が発生した時点から遡って過去3ヶ月間に、ユーザーが本アプリに実際に支払った金額を上限**とします。
3. **不可抗力免責**：当チームは、サーバーメンテナンス、システム更新、通信回線障害、クラウドインフラ（GCP等）の障害、又は天災地変等の不可抗力に起因するサービスの停止・遅延・中止について、一切の賠償責任を負わないものとします。

---

## 第9条（規約の変更及び終了）
1. **利用停止**：ユーザーが本規約に違反した場合、その他法令に違反する行為を行った場合、当チームは事前の通知なくユーザーのアカウントを即時停止又は削除できるものとし、これによる返金や補償は一切行いません。
2. **準拠法**：本規約の有効性、解釈、履行及び紛争解決については、**日本法**を準拠法とします。

---

## 第10条（お問い合わせ窓口）
本規約に関するご質問、サポート、又は権利主張については、以下のメールアドレスにお問い合わせください。
*   **お問い合わせ窓口**：douglasdouglasskikcn@outlook.com
*   **更新日**：2026年7月3日`;

export const docEnPrivacy = `# Privacy Policy

**Last Updated:** July 2026

**Bagels Development Team** ("we," "us," or "our") respects your privacy. This Privacy Policy explains how we collect, use, store, and share your personal information when you use the **Bagels** iOS application (the "App" or "Service").

Please read this policy carefully. It applies globally, with specific regional disclosures provided at the bottom of the document.

---

## 1. Information We Collect

We collect information to provide and improve our Service. This includes:

1. **Account Information:** Name, email address, profile picture, and third-party login identifiers (Apple ID / Google Account).
2. **User-Generated Content (UGC):** Custom photos/images you upload to use as playlist covers.
3. **Usage & AI Interaction Data:** Chat history with the AI assistant (text), playback history, playlist titles, and favorited items.
4. **Device & Technical Data:** IP address, OS version, device model, app crash logs, and general diagnostic data.
5. **Purchase Meta-Data:** Subscription status and timestamps (Payments are processed directly by Apple; we do not collect or store your credit card details).

## 2. Apple Music & Device Permissions

To provide core functionalities, the App requests specific iOS permissions:

1. **Apple Music & Media Library:** The App uses the iOS MusicKit SDK to access your Apple Music library locally to play music and manage playlists. **We do not upload or store your Apple Music access tokens or library data on our servers**, nor do we sell this data to third parties.
2. **Photos (Camera Roll):** We request access to your photo library solely to allow you to upload custom playlist covers or save AI-generated images. Uploaded images are stored securely on our cloud servers strictly for display within your App.

## 3. How We Use Your Information

We use the collected information for the following purposes:

* **Service Delivery:** To authenticate your account, manage subscriptions, and sync your custom covers across your devices.
* **AI & Personalization:** To generate AI playlist recommendations and custom covers based on your inputs.
* **App Improvement:** To analyze crash reports and aggregated usage trends to improve App stability and AI accuracy.
* **Customer Support:** To respond to your inquiries and requests.

## 4. Data Storage and International Transfers

Our backend infrastructure and databases are hosted on **Google Cloud Platform (GCP)** located in the **United States**.

By using the App, you understand that your personal data (including chat logs and uploaded images) will be transferred to, processed, and stored in the United States. We implement robust security measures, including HTTPS/TLS encryption in transit and AES-256 encryption at rest.

## 5. Sharing of Information

We **do not sell** your personal information. We only share information in the following limited circumstances:

* **Service Providers:** We share data with Google Cloud (hosting) and Firebase (analytics/crash reporting) to operate the App.
* **Legal Compliance:** We may disclose information if required to do so by law, court order, or governmental request.

## 6. Data Retention and Deletion

We retain your data as long as your account is active.
**Account Deletion:** You can delete your account at any time via the App's "Settings." Initiating an account deletion will permanently and irreversibly erase your profile, chat history, and uploaded images from our active servers.

---

## 7. Regional Privacy Disclosures

### A. For Residents of the United States (California)

This section applies solely to residents of California and is provided in compliance with the California Consumer Privacy Act of 2018 (CCPA) and the California Privacy Rights Act of 2020 (CPRA).

#### **Notice at Collection**

We collect the following categories of personal information (as defined by the CCPA) from you. The table below describes the categories we have collected in the preceding 12 months, the sources, the business purposes, and the categories of third parties to whom we disclose the information:

| CCPA Category of Personal Information | Collected in Past 12 Months? | Source of Information | Business/Commercial Purpose | Third Parties Disclosed To |
| :--- | :--- | :--- | :--- | :--- |
| **Identifiers** (e.g., Name, email address, profile picture, Apple/Google ID, IP address) | Yes | Directly from you, or third-party logins (Apple/Google) | Account creation, login authentication, user support, cloud data sync | Cloud hosting provider (GCP), backend analytics (Firebase) |
| **Personal Information Categories listed in Cal. Civ. Code § 1798.80(e)** (e.g., Name, email address, payment timestamps) | Yes | Directly from you, or Apple App Store (purchase metadata) | Account management, verification of subscription status | Cloud hosting provider (GCP) |
| **Commercial Information** (e.g., Subscription status, transaction history/timestamps) | Yes | Apple App Store | Account management, subscription verification | Cloud hosting provider (GCP) |
| **Internet or Other Electronic Network Activity Information** (e.g., Usage logs, app crash data, AI chat history, playback history) | Yes | Automatically collected from your device interactions | Improving App stability, optimizing AI song recommendations, debugging | Analytics/Crash-reporting provider (Firebase) |
| **Sensory Data (Audio/Electronic/Visual)** (e.g., Uploaded cover images) | Yes | Directly uploaded by you | Displaying custom playlist covers | Cloud hosting provider (GCP) |

* **Do Not Sell or Share My Personal Information:** We do not sell your personal information or share it for cross-context behavioral advertising (as defined under California law). Therefore, we do not provide a "Do Not Sell or Share My Personal Information" link.
* **Sensitive Personal Information:** We do not collect or process sensitive personal information (as defined by the CCPA) for the purpose of inferring characteristics about you, and we do not use it for purposes other than providing the core Services.
* **Your Rights under CCPA/CPRA:** You have the right to request access to the categories and specific pieces of personal information collected, request deletion of your data, request correction of inaccurate data, and be free from discrimination for exercising these rights. You can exercise these rights by emailing us at <douglasdouglasskikcn@outlook.com>.

### B. For Residents of the United Kingdom (UK) and EEA (EU)

If you are located in the UK or the European Economic Area (EEA), the UK GDPR and EU GDPR apply.

#### **1. Legal Bases for Processing Personal Data**

We process your personal data under the following legal bases under Article 6 of the GDPR:

* **Contractual Necessity (Art. 6(1)(b) GDPR):** To perform our agreement with you to provide the Service, including account authentication, billing verification, playlist management, and displaying user-generated playlist covers.
* **Consent (Art. 6(1)(a) GDPR):** Where you have given explicit consent, such as for accessing your device's photo library to upload playlist covers. You may withdraw consent at any time.
* **Legitimate Interests (Art. 6(1)(f) GDPR):** For our legitimate business interests in maintaining and improving the App, debugging crash logs, optimizing AI recommendation quality, and resolving support requests, provided these interests do not override your privacy rights.
* **Legal Obligation (Art. 6(1)(c) GDPR):** To comply with legal, tax, accounting, or regulatory requirements.

#### **2. International Data Transfers & Safety Mechanisms**

Because our databases are hosted on Google Cloud Platform in the United States, your personal data is transferred out of the UK/EEA. To protect your data, we utilize **Standard Contractual Clauses (SCCs)** approved by the European Commission (along with the UK International Data Transfer Addendum) which are incorporated into our agreements with Google LLC and other service providers to guarantee an adequate level of data protection.

#### **3. EU/UK Representatives and DPO Contact Info**

* **EU Representative:** [contact us directly at douglasdouglasskikcn@outlook.com]
* **UK Representative:** [contact us directly at douglasdouglasskikcn@outlook.com]
* **Data Protection Officer (DPO):** [contact us directly at douglasdouglasskikcn@outlook.com]

#### **4. Your GDPR Rights & Complaints**

You have the right to access, rectify, or erase your personal data, restrict or object to processing, request data portability, and withdraw consent. You also have the right to lodge a complaint with your national Data Protection Authority (e.g., the Information Commission's Office (ICO) in the UK).

### C. For Residents of Canada, Australia, New Zealand, and Singapore

You have the right to access and correct the personal information we hold about you under your local privacy laws (PIPEDA in Canada, Privacy Act 1988 in Australia, Privacy Act 2020 in New Zealand, and PDPA in Singapore). Please contact <douglasdouglasskikcn@outlook.com> for any access or correction requests.

## 8. Children's Privacy

The App is not directed at children.

* **US (COPPA):** We do not knowingly collect personal information from children under 13 in the US.
* **UK (AADC):** In compliance with the UK Age Appropriate Design Code, we implement default high privacy settings and do not engage in detrimental profiling of users under 18.
If we learn we have collected data from an underage user without verified parental consent, we will delete it immediately.

## 9. Contact Us

For any privacy-related inquiries, data access requests, or account deletion support, please contact us at: <douglasdouglasskikcn@outlook.com>`;

export const docEnTerms = `# End User License Agreement (EULA) and Terms of Service

**Last Updated:** July 2026

Welcome to **Bagels** (the "App" or "Service"). This End User License Agreement and Terms of Service (this "Agreement") is a binding legal contract between you ("you" or "User") and **Bagels Development Team** ("we," "us," or "our"). 

By creating an account, downloading, accessing, or using the App, you agree to be bound by this Agreement. If you do not agree to this Agreement, do not use the App.

> [!IMPORTANT]
> **NOTICE REGARDING DISPUTE RESOLUTION FOR U.S. USERS:** Section 9 of this Agreement contains a mandatory binding arbitration clause and a class action waiver. It affects how disputes are resolved. Please read it carefully.

---

## 1. Eligibility and Age Requirements

You must be of legal age in your jurisdiction to form a binding contract to use the App. 

* **If you are a resident of the United States:** You must be at least 13 years of age to use the Service (subject to COPPA). If you are between 13 and 18, you must have your parent or legal guardian's permission.
* **If you are a resident of the United Kingdom (UK) or European Economic Area (EEA):** You must be at least 13 to 16 years of age depending on your specific country's laws under the GDPR. If you are under 18, you must have your parent or legal guardian's permission to use the Service.

## 2. Service Description and Technical Limitations

Bagels integrates Artificial Intelligence (AI) and local Apple Music library management.
1. **Apple Music Integration:** The App uses the iOS MusicKit framework to locally access your Apple Music library, playlists, and playback history. We do not upload your Apple Music token to our servers.
2. **AI Features:** The App provides AI-driven song recommendations and allows you to generate or upload custom playlist cover images. 
3. **External Videos:** The App may display previews of popular music videos and redirect you to external platforms (e.g., YouTube). We are not responsible for the content or privacy practices of these third-party platforms.

## 3. Account Security and Deletion

You may sign in via third-party accounts (e.g., Apple ID, Google Account). You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. 
You may delete your account at any time within the App's Settings. **Warning: Deleting your account will permanently and irreversibly erase all your data, including chat history, custom covers, and unused AI credits. No refunds will be provided for unused credits upon deletion.**

## 4. User Generated Content (UGC) and Intellectual Property

1. **Our IP:** All intellectual property rights in the App, including algorithms, UI, and trademarks, belong to us.
2. **Your Content:** You retain your rights to any images you upload as custom covers. By uploading, you grant us a worldwide, royalty-free, non-exclusive license to host, cache, and display your images locally to provide the Service.
3. **Prohibited Conduct:** You may not upload content that infringes on third-party intellectual property, privacy, or publicity rights, or content that is abusive, pornographic, hateful, or illegal. We reserve the right to remove any violating content without notice.

* **If you are a resident of the United States (DMCA Notice):** If you believe your copyrighted work has been infringed in the App, please contact us at douglasdouglasskikcn@outlook.com with a takedown request in accordance with the Digital Millennium Copyright Act (DMCA).

## 5. AI Services Disclaimers

1. **AI Credits:** Purchased AI credits are valid for 30 days from the date of purchase. Unused credits will expire automatically and are strictly non-refundable.
2. **AI Hallucinations and Accuracy:** The AI is an automated tool and may generate inaccurate, fictitious, or nonsensical information (e.g., recommending non-existent songs). You use the AI features at your own risk. The outputs are for entertainment purposes and do not constitute professional advice.

## 6. Subscriptions, Billing, and Refunds

The App offers auto-renewing subscriptions processed entirely through the Apple App Store. Your Apple ID will be charged upon confirmation of purchase. Subscriptions auto-renew unless canceled at least 24 hours before the end of the current period.

**Refund Policy:** All transactions are processed by Apple. We cannot grant refunds directly. You must request any refunds through Apple Support.

* **If you are a resident of the United Kingdom (UK) or the European Union (EU):** Under consumer protection laws, you generally have a statutory right to cancel a digital purchase within 14 days (the "cooling-off period"). However, by subscribing and immediately accessing our digital content, you acknowledge and agree that you lose this statutory right of withdrawal once the delivery of the digital content has commenced.
* **If you are a resident of Australia or New Zealand:** Nothing in this Agreement excludes, restricts, or modifies any consumer guarantee, right, or remedy conferred by the Australian Consumer Law (ACL) or the New Zealand Consumer Guarantees Act (CGA) that cannot be lawfully excluded.

## 7. Limitation of Liability and Disclaimers

THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE." TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.

OUR TOTAL CUMULATIVE LIABILITY TO YOU FOR ANY CLAIMS ARISING OUT OF THIS AGREEMENT SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE THREE (3) MONTHS PRECEDING THE CLAIM.

* **If you are a resident of the UK, Australia, or New Zealand:** We do not exclude or limit in any way our liability to you where it would be unlawful to do so. This includes liability for death or personal injury caused by our negligence, or for fraud or fraudulent misrepresentation.
* **If you are a resident of certain U.S. States (e.g., New Jersey):** Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability for consequential damages, so the above limitations may not apply to you.

## 8. Dispute Resolution, Arbitration, and Class Action Waiver (U.S. USERS ONLY)

* **If you are a resident of the United States:** 
  You and Bagels agree that any dispute, claim, or controversy arising out of or relating to this Agreement or the Service shall be determined by **mandatory binding individual arbitration**, rather than in court. 
  **CLASS ACTION WAIVER:** You and Bagels agree that each may bring claims against the other only in your or its individual capacity, and NOT as a plaintiff or class member in any purported class or representative proceeding. The arbitrator may not consolidate another person's claims with your claims.

## 9. Governing Law and Jurisdiction

This Agreement shall be governed by the laws of the State of California, United States, without regard to its conflict of law principles. 
* **If you are a resident of the US:** Any disputes not subject to arbitration shall be resolved exclusively in the state or federal courts located in Santa Clara County, California.

## 10. Contact Us

For any questions regarding this Agreement, please contact us at: douglasdouglasskikcn@outlook.com`;
