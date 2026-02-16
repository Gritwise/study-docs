---
theme: seriph
background: ./bg-gritwise.png
class: "text-center text-slate-700"
highlighter: shiki
lineNumbers: false
info: |
  ## IT基礎ハンズオン勉強会
  Spring Boot & Vue.js 入門
drawings:
  persist: false
defaults:
  background: ./bg-gritwise.png
transition: slide-left
title: IT基礎ハンズオン勉強会
---

<style>
.slidev-layout {
  background-image: url("./bg-gritwise.png") !important;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: #334155; /* slate-700 */
}
</style>

# IT基礎ハンズオン勉強会

## Spring Boot & Vue.js で作るWebアプリケーション入門

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer hover:bg-gray-200">
    Start <carbon:arrow-right class="inline"/>
  </span>
</div>

---
background: ./bg-gritwise.png
---

# ハンズオンのゴール

**ローカル環境で「注文システム」を一から構築し、Webアプリの仕組みを理解する**

<div class="grid grid-cols-2 gap-4 mt-8 text-left text-sm">
  <div class="bg-white/90 p-4 rounded border border-slate-300">
    <h3 class="font-bold text-sky-700 mb-2">🎯 作るもの</h3>
    <ul class="list-disc pl-5 text-slate-600 space-y-2">
      <li><strong>バックエンド (Spring Boot)</strong>: 注文を受け付け、消費税を計算してDBに保存するAPI</li>
      <li><strong>フロントエンド (Vue.js)</strong>: ユーザーが注文を入力し、結果を表示する画面</li>
      <li><strong>データベース (H2 DB)</strong>: 注文データを保存する場所</li>
    </ul>
  </div>
  <div class="bg-white/90 p-4 rounded border border-slate-300">
    <h3 class="font-bold text-teal-700 mb-2">🧠 学べること</h3>
    <ul class="list-disc pl-5 text-slate-600 space-y-2">
      <li>API（Application Programming Interface）の役割</li>
      <li>サーバーサイドでのロジック実装（消費税計算）</li>
      <li>フロントエンドとバックエンドの連携方法</li>
      <li>データベースへのデータ登録と確認</li>
    </ul>
  </div>
</div>

---
background: ./bg-gritwise.png
---

# 全体の流れ

**約60分で開発環境の構築からアプリの動作確認までを行います**

<div class="mt-6 space-y-3 text-left text-sm">
  <div class="flex items-center gap-4 bg-sky-50/90 p-3 rounded border border-sky-200">
    <div class="font-bold text-sky-700 w-16">Step 1</div>
    <div class="text-slate-700"><strong>環境構築</strong>：VSCode と Java (JDK) のインストール</div>
  </div>
  <div class="flex items-center gap-4 bg-sky-50/90 p-3 rounded border border-sky-200">
    <div class="font-bold text-sky-700 w-16">Step 2</div>
    <div class="text-slate-700"><strong>プロジェクト作成</strong>：Spring Initializr で土台を作る</div>
  </div>
  <div class="flex items-center gap-4 bg-teal-50/90 p-3 rounded border border-teal-200">
    <div class="font-bold text-teal-700 w-16">Step 3</div>
    <div class="text-slate-700"><strong>バックエンド実装</strong>：注文APIとDB接続の実装</div>
  </div>
  <div class="flex items-center gap-4 bg-teal-50/90 p-3 rounded border border-teal-200">
    <div class="font-bold text-teal-700 w-16">Step 4</div>
    <div class="text-slate-700"><strong>API動作確認</strong>：ブラウザから直接APIを叩いてみる</div>
  </div>
  <div class="flex items-center gap-4 bg-purple-50/90 p-3 rounded border border-purple-200">
    <div class="font-bold text-purple-700 w-16">Step 5</div>
    <div class="text-slate-700"><strong>フロントエンド実装</strong>：Vue.js で注文画面を作る</div>
  </div>
  <div class="flex items-center gap-4 bg-indigo-50/90 p-3 rounded border border-indigo-200">
    <div class="font-bold text-indigo-700 w-16">Step 6</div>
    <div class="text-slate-700"><strong>統合テスト</strong>：画面から注文し、DBへの登録を確認する</div>
  </div>
</div>

---
background: ./bg-gritwise.png
---

# Step 1: 環境構築

**開発に必要なツール（エディタとプログラミング言語）を準備します**

<div class="grid grid-cols-2 gap-4 mt-6 text-left text-xs">
  <div>
    <h3 class="font-bold text-sky-700 mb-2">1. VSCode (Visual Studio Code)</h3>
    <p class="mb-2 text-slate-600">世界で最も使われている高機能エディタ。</p>
    <div class="bg-gray-100 p-2 rounded border border-gray-300">
      <strong>Action:</strong><br>
      1. 公式サイトからインストール: <span class="text-[10px] text-blue-600">https://code.visualstudio.com/</span><br>
      2. 拡張機能「<strong>Extension Pack for Java</strong>」をインストール
    </div>
  </div>
  <div>
    <h3 class="font-bold text-amber-700 mb-2">2. Java (JDK 17)</h3>
    <p class="mb-2 text-slate-600">Spring Boot を動かすための実行環境。</p>
    <div class="bg-gray-100 p-2 rounded border border-gray-300">
      <strong>Action:</strong><br>
      Amazon Corretto 17 などをインストールしてください。<br>
      <span class="text-[10px] text-blue-600">https://aws.amazon.com/corretto/</span>
    </div>
  </div>
</div>

<div class="mt-4 p-2 bg-yellow-50 text-amber-800 text-xs rounded border border-yellow-200 text-center">
  💡 インストール完了後、コマンドプロンプトで `java -version` と入力し、バージョンが表示されればOKです。
</div>

---
background: ./bg-gritwise.png
---

# Step 2: Spring Boot プロジェクト作成

**「Spring Initializr」を使って、アプリのひな形を自動生成します**

<div class="text-left mt-4 text-sm">
  <strong>Access:</strong> <a href="https://start.spring.io/" target="_blank">https://start.spring.io/</a>
</div>

<div class="grid grid-cols-2 gap-4 mt-2 text-left text-xs">
  <div class="bg-white/90 p-3 rounded border border-slate-300">
    <strong class="text-sky-700">設定項目 (Project Metadata)</strong>
    <ul class="list-disc pl-4 mt-1 space-y-1">
      <li><strong>Project</strong>: Gradle - Groovy</li>
      <li><strong>Language</strong>: Java</li>
      <li><strong>Spring Boot</strong>: 3.x.x (最新の安定版)</li>
      <li><strong>Group</strong>: com.example</li>
      <li><strong>Artifact</strong>: demo-order</li>
      <li><strong>Packaging</strong>: Jar</li>
      <li><strong>Java</strong>: 17</li>
    </ul>
  </div>
  <div class="bg-white/90 p-3 rounded border border-slate-300">
    <strong class="text-teal-700">依存関係 (Dependencies)</strong>
    <div class="text-[10px] text-slate-500 mb-1">ADD DEPENDENCIESボタンから追加</div>
    <ul class="list-disc pl-4 mt-1 space-y-1">
      <li><strong>Spring Web</strong> (Webアプリ機能)</li>
      <li><strong>Spring Data JPA</strong> (DB操作)</li>
      <li><strong>H2 Database</strong> (軽量な組み込みDB)</li>
      <li><strong>Lombok</strong> (コード量削減)</li>
    </ul>
  </div>
</div>

<div class="mt-4 text-center">
  <div class="inline-block bg-sky-600 text-white px-4 py-2 rounded font-bold">
    GENERATE ボタンをクリックしてダウンロード！
  </div>
  <p class="text-xs text-slate-500 mt-1">zipファイルを解凍し、フォルダをVSCodeで開いてください。</p>
</div>

---
background: ./bg-gritwise.png
---

# Step 2.5: 設定ファイル編集

**H2 Console（DB確認画面）を使えるように設定を追加します**

`src/main/resources/application.properties` を開き、以下を追記

```properties
spring.application.name=demo-order

# H2 Consoleを有効化 (初期設定では無効になっているため)
spring.h2.console.enabled=true

# DB接続先を固定 (毎回URLが変わるのを防ぐため)
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
```

<div class="mt-4 p-2 bg-yellow-50 text-amber-800 text-xs rounded border border-yellow-200 text-left">
  <strong>💡 H2 Consoleの使い方</strong><br>
  1. ブラウザでアクセス: <span class="text-blue-600">http://localhost:8080/h2-console</span><br>
  2. <strong>JDBC URL</strong> を <span class="font-bold bg-yellow-200 px-1">jdbc:h2:mem:testdb</span> に書き換える<br>
  <span class="text-[10px] text-red-600 pl-4">※ 初期値の `jdbc:h2:~/test` のままだと "Database not found" エラーになります！</span><br>
  3. User Name: <code>sa</code>, Password: (空欄) のまま Connect
</div>

---
background: ./bg-gritwise.png
---

# Step 3: バックエンド実装 (1/4) - データの形を定義

**まずは「注文データ」として何を保存するか（Entity）を定義します**

`src/main/java/com/example/demoorder/Order.java` を作成

<div class="overflow-y-auto h-[400px] text-xs">

```java
package com.example.demoorder;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity // これがDBのテーブルになる
@Table(name = "orders") // テーブル名は "orders"
@Data // Getter/Setterを自動生成
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;        // 注文ID (自動採番)
    private String item;    // 商品名
    private Integer price;  // 価格（税抜）
    private Integer tax;    // 消費税
    private Integer total;  // 税込合計金額
}
```

</div>

---
background: ./bg-gritwise.png
---

# Step 3: バックエンド実装 (2/4) - DBアクセスの仕組み

**DBへの読み書きを簡単にできる「Repository」を作成します**

`src/main/java/com/example/demoorder/OrderRepository.java` を作成

<div class="overflow-y-auto h-[400px] text-xs">

```java
package com.example.demoorder;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    // これだけで、基本的なCRUD（保存、検索、削除など）が使えるようになる！
    // 魔法のような仕組み（Spring Data JPA）
}
```

</div>

---
background: ./bg-gritwise.png
---

# Step 3: バックエンド実装 (3/4) - APIの作成

**ブラウザからのリクエストを受け付け、計算して保存する「Controller」を作成**

`src/main/java/com/example/demoorder/OrderController.java` を作成

<div class="overflow-y-auto h-[400px] text-xs">

```java
package com.example.demoorder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "*") // フロントエンドからのアクセスを許可
public class OrderController {
    
    @Autowired
    private OrderRepository repository;

    @PostMapping // 注文を受け付ける (POSTリクエスト)
    public Order placeOrder(@RequestBody OrderRequest request) {
        Order order = new Order();
        order.setItem(request.getItem());
        order.setPrice(request.getPrice());
        
        // サーバーサイドロジック：消費税10%を計算
        int tax = (int)(request.getPrice() * 0.1);
        order.setTax(tax);
        order.setTotal(request.getPrice() + tax);
        
        return repository.save(order); // DBに保存して結果を返す
    }

    @GetMapping // 注文履歴を返す (GETリクエスト)
    public List<Order> getAllOrders() {
        return repository.findAll();
    }
}
```

</div>

---
background: ./bg-gritwise.png
---

# Step 3: バックエンド実装 (4/4) - リクエスト用クラス

**APIのリクエストデータを受け取るためのクラス「OrderRequest」を作成**

`src/main/java/com/example/demoorder/OrderRequest.java` を作成

<div class="overflow-y-auto h-[400px] text-xs mt-6">

```java
package com.example.demoorder;

import lombok.Data;

@Data // Getter/Setterを自動生成
public class OrderRequest {
    private String item;  // 商品名
    private Integer price; // 価格
}
```

</div>

---
background: ./bg-gritwise.png
---

# Step 4: API動作確認

**フロントエンドを作る前に、バックエンド単体で動くか確認します**

<div class="grid grid-cols-2 gap-4 mt-6 text-left text-xs">
  <div>
    <h3 class="font-bold text-sky-700 mb-2">1. アプリ起動</h3>
    <p class="text-slate-600 mb-2">VSCodeの「Run」またはターミナルから以下を実行。</p>
    <code class="text-white p-2 block rounded" style="background-color: #000000; color: white;">
      ./gradlew bootRun
    </code>
  </div>
  <div>
    <h3 class="font-bold text-teal-700 mb-2">2. APIを叩く (PowerShell等)</h3>
    <code class="text-white p-2 block rounded mb-2" style="background-color: #000000; color: white;">
      curl -X POST http://localhost:8080/api/orders -H "Content-Type: application/json" -d '{"item": "Laptop", "price": 100000}'
    </code>
    <div class="bg-green-100 text-green-800 p-2 rounded">
      <strong>成功すると...</strong><br>
      税込金額（110,000）が入ったJSONが返ってきます！
    </div>
  </div>
</div>


---
background: ./bg-gritwise.png
---

# Step 5: フロントエンド実装 (Vue.js)

**ユーザーが操作する画面を作ります（`index.html`に直書きする簡易版）**

`src/main/resources/static/index.html` を作成

<div class="overflow-y-auto h-[400px] text-xs">

```html
<!DOCTYPE html>
<html>
<head>
    <title>注文システム</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>
<body>
    <div id="app">
        <h2>商品注文</h2>
        <input v-model="item" placeholder="商品名">
        <input v-model.number="price" type="number" placeholder="価格">
        <button @click="order">注文する</button>

        <h3>注文履歴</h3>
        <ul>
            <li v-for="o in orders">
                {{ o.item }}: ¥{{ o.total }} (税 ¥{{ o.tax }}込)
            </li>
        </ul>
    </div>
    
    <script>
        const { createApp, ref, onMounted } = Vue;
        createApp({
            setup() {
                const item = ref('');
                const price = ref(0);
                const orders = ref([]);

                const fetchOrders = async () => {
                    const res = await fetch('http://localhost:8080/api/orders');
                    orders.value = await res.json();
                };

                const order = async () => {
                    await fetch('http://localhost:8080/api/orders', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ item: item.value, price: price.value })
                    });
                    item.value = ''; price.value = 0;
                    fetchOrders(); // 履歴リストを更新
                };

                onMounted(fetchOrders);
                return { item, price, orders, order };
            }
        }).mount('#app');
    </script>
</body>
</html>
```

</div>

---
background: ./bg-gritwise.png
---

# Step 5.5: サーバー再起動

**フロントエンド（index.html）を反映させるため、一度サーバーを再起動します**

<div class="mt-8 p-4 bg-white/90 rounded border border-slate-300 text-center">
  <p class="mb-4 text-slate-700">
    ターミナルで <kbd class="bg-slate-200 p-1 rounded border border-slate-400">Ctrl</kbd> + <kbd class="bg-slate-200 p-1 rounded border border-slate-400">C</kbd> を押して停止し、<br>
    再度以下のコマンドを実行してください。
  </p>
  
  <code class="text-white p-3 block rounded text-lg mx-auto w-fit" style="background-color: #000000; color: white;">
    ./gradlew bootRun
  </code>
</div>

---
background: ./bg-gritwise.png
---

# Step 6: 統合テスト & DB確認

**画面から注文し、裏側（DB）まで正しくデータが流れているか確認します**

<div class="mt-6 text-left text-sm space-y-4">
  <div>
    <strong class="text-sky-700">1. ブラウザでアクセス</strong><br>
    `http://localhost:8080/` にアクセス。<br>
    商品名と価格を入力して「注文する」ボタンを押すと、下の履歴に追加されます。
  </div>
  
  <div>
    <strong class="text-teal-700">2. H2 ConsoleでDBを確認</strong><br>
    http://localhost:8080/h2-console にアクセス。<br>
    SELECT * FROM ORDERS; を実行すると、登録されたレコードが確認できます。
  </div>
</div>

<div class="mt-8 text-center bg-purple-100 p-4 rounded border-2 border-purple-300">
  <span class="text-xl font-bold text-purple-800">🎉 Congratulations! 🎉</span><br>
  これがWebアプリケーション（SPA + REST API + DB）の基本形です。<br>
  実際の現場でも、この構造をベースに規模を大きくして開発しています。
</div>
