
# 5. 情報漏洩 / セキュリティ観点

## AI利活用の3つのリスクと対策

**不適切な利用は情報漏洩や法的リスクにつながる。「知らなかった」は通用しない**

<div class="grid grid-cols-3 gap-3 mt-6 text-left text-xs">

<div class="bg-red-900/20 p-4 rounded border-t-4 border-red-500">
  <div class="font-bold text-sm mb-2">📊 ハルシネーション対策</div>
  <div class="mb-2">AIの回答は「もっともらしい嘘」を含む前提で使う。</div>
  <div class="bg-gray-800/50 p-2 rounded">
    <strong>やるべきこと：</strong>
    <ul class="list-disc pl-3 mt-1">
      <li>数値・固有名詞は必ず一次情報で裏取り</li>
      <li>「出典は？」とAIに聞く癖をつける</li>
      <li>自分が知識のある領域で使う（未知領域は高リスク）</li>
    </ul>
  </div>
</div>

<div class="bg-red-900/20 p-4 rounded border-t-4 border-yellow-500">
  <div class="font-bold text-sm mb-2">🔒 機密保持 <span class="bg-yellow-600 text-xs px-2 py-0.5 rounded ml-1">最重要</span></div>
  <div class="mb-2">プロンプトに入れたデータは学習に使われる可能性がある。</div>
  <div class="bg-gray-800/50 p-2 rounded">
    <strong>やるべきこと：</strong>
    <ul class="list-disc pl-3 mt-1">
      <li>顧客情報・個人情報は絶対に入力しない</li>
      <li>社外秘データはマスキングしてから使う</li>
      <li>学習オプトアウト済みの環境を使う</li>
    </ul>
  </div>
</div>

<div class="bg-red-900/20 p-4 rounded border-t-4 border-blue-500">
  <div class="font-bold text-sm mb-2">⚖️ 権利の尊重</div>
  <div class="mb-2">AIの生成物が他者の著作権を侵害する可能性がある。</div>
  <div class="bg-gray-800/50 p-2 rounded">
    <strong>やるべきこと：</strong>
    <ul class="list-disc pl-3 mt-1">
      <li>AIの生成物をそのまま納品しない</li>
      <li>既存コンテンツとの類似をチェック</li>
      <li>利用規約・ガイドラインを遵守</li>
    </ul>
  </div>
</div>

</div>

---
background: ./bg-gritwise.png
---

# 5. 情報漏洩 / セキュリティ観点

## 情報入力のルール：何を入れていいか・ダメかの判断基準

**迷ったら「もしこの情報がネットに流出したら？」と想像する。それが判断の原則**

<div class="mt-4 text-xs text-left">

| 分類 | イメージ | 具体例 | AI入力 |
|:---|:---|:---|:---:|
| **極秘** | 🔐 金庫の中 | 未発表の経営戦略、社員の個人情報、マイナンバー、ID/パスワード、システム設計書 | **❌ 禁止** |
| **関係社外秘** | 🗄️ PJルームの鍵付きキャビネット | 顧客から預かった機密データ、顧客のステークホルダー情報 | **❌ 禁止** |
| **社外秘** | 📁 社内の共有フォルダ | PJメール・チャット履歴、会議資料・議事メモ | **⚠️ マスキング必須** |
| **公開** | 🌐 会社HP | 公開済みの会社紹介、採用情報、セミナー資料、プレスリリース | **✅ OK** |

</div>

<div class="mt-4 bg-red-900/30 p-3 rounded border border-red-500/50 text-xs text-left">
  <strong>⚠️ 社外秘を入力する場合の鉄則：</strong> 企業名・個人名は必ずマスキング（例：「A社」「担当者X」）してから入力すること。
</div>

<div class="mt-2 text-xs text-left bg-gray-800/50 p-2 rounded">
  💡 <strong>簡単チェック：</strong>入力しようとしている情報に「人の名前」「会社の固有名」「未公開の数字」が含まれていたら、一度立ち止まって判断する。
</div>

---
background: ./bg-gritwise.png
---

# 5. 情報漏洩 / セキュリティ観点

## ハルシネーション対策の実践：3つの防御ライン

**AIの出力は「優秀な新人のドラフト」。信頼するが、必ず検証する**

<div class="grid grid-cols-3 gap-4 mt-6 text-left text-xs">

<div class="bg-blue-900/30 p-4 rounded">
  <div class="text-3xl text-center mb-2">🎯</div>
  <h3 class="font-bold text-blue-300 text-center mb-2">明確に (Clearly)</h3>
  <div>質問を具体的にし、AIに「役割」を与える。曖昧な指示は曖昧な回答を生む。</div>
  <div class="mt-2 bg-gray-800/50 p-2 rounded">
    <strong>例：</strong>「〇〇について教えて」ではなく「〇〇業界のシニアアナリストとして、△△の市場規模を推計してください」
  </div>
</div>

<div class="bg-blue-900/30 p-4 rounded">
  <div class="text-3xl text-center mb-2">📋</div>
  <h3 class="font-bold text-blue-300 text-center mb-2">文脈示して (Context)</h3>
  <div>背景や目的（インプット）を十分に読み込ませる。AIは与えられた情報の範囲で回答する。</div>
  <div class="mt-2 bg-gray-800/50 p-2 rounded">
    <strong>例：</strong> 参考資料をペーストし「この情報に基づいて回答してください。情報がない場合は『不明』と答えてください」
  </div>
</div>

<div class="bg-blue-900/30 p-4 rounded">
  <div class="text-3xl text-center mb-2">🔍</div>
  <h3 class="font-bold text-blue-300 text-center mb-2">鵜呑みにしない (Verify)</h3>
  <div>出力結果は必ず検証し、責任は自分が持つ。数値・出典・固有名詞は一次情報で確認。</div>
  <div class="mt-2 bg-gray-800/50 p-2 rounded">
    <strong>例：</strong> AIが出した統計データは、元の調査レポートや公的データベースで裏を取る
  </div>
</div>

</div>

---
background: ./bg-gritwise.png
---

# 5. 情報漏洩 / セキュリティ観点

## 成果物に対する責任：「AIがそう言った」は通用しない

**プロフェッショナルとして、最終成果物の品質は100%自分の責任**

<div class="bg-blue-900/20 p-4 rounded text-left mt-4 text-sm">
  <strong>📋 リリース・提出前のチェックリスト</strong>
  <ul class="list-none pl-2 mt-3 space-y-3">
    <li>☐ <strong>ファクトチェック</strong>：数値・日付・固有名詞を一次情報で裏取りしたか？</li>
    <li>☐ <strong>情報セキュリティ</strong>：プロンプトに機密情報・個人情報を入力していないか？</li>
    <li>☐ <strong>権利侵害</strong>：生成物が他社コンテンツ・著作物に酷似していないか？</li>
    <li>☐ <strong>倫理チェック</strong>：差別的・暴力的・不適切な表現が含まれていないか？</li>
    <li>☐ <strong>マスキング確認</strong>：社外秘情報の企業名・個人名をマスキングしたか？</li>
  </ul>
</div>

<div class="mt-4 text-center bg-red-900/30 p-3 rounded border border-red-500/50 text-sm">
  <strong>覚えておくべきこと：</strong>クライアントに提出する成果物にAI生成の誤りがあった場合、<br>
  責任を取るのはAIではなく<strong>あなた自身</strong>です。
</div>

---
background: ./bg-gritwise.png
---

# 5. 情報漏洩 / セキュリティ観点

## 困ったら相談：一人で抱えない

**判断に迷ったら、まず相談。インシデントが起きたら、即報告**

<div class="grid grid-cols-3 gap-4 mt-8 text-left text-xs">

<div class="bg-blue-900/30 p-4 rounded text-center">
  <div class="text-3xl mb-3">💬</div>
  <div class="font-bold text-sm mb-2">AI利活用の相談</div>
  <div class="mb-2">「このデータ、AIに入れていい？」<br>「この使い方は問題ない？」</div>
  <div class="bg-gray-800/50 p-2 rounded font-mono text-xs">
    Slackチャンネル<br>[WG] AI利活用
  </div>
</div>

<div class="bg-blue-900/30 p-4 rounded text-center">
  <div class="text-3xl mb-3">🔧</div>
  <div class="font-bold text-sm mb-2">ツール利用可否の相談</div>
  <div class="mb-2">「この新しいAIツール、<br>業務で使っていい？」</div>
  <div class="bg-gray-800/50 p-2 rounded font-mono text-xs">
    info_system<br>@gritwise.co.jp
  </div>
</div>

<div class="bg-red-900/30 p-4 rounded text-center border border-red-500/50">
  <div class="text-3xl mb-3">🚨</div>
  <div class="font-bold text-sm mb-2 text-red-300">インシデント発生時</div>
  <div class="mb-2">「機密情報を入力してしまった」<br>「情報漏洩の可能性がある」</div>
  <div class="bg-gray-800/50 p-2 rounded font-mono text-xs">
    security-incident<br>@gritwise.co.jp
  </div>
</div>

</div>

<div class="mt-4 text-center text-sm font-bold">
  🔑 迷ったら「入力しない」が正解。判断に困ったら、まずSlackで聞こう。
</div>
