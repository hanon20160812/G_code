<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CODE神器【銑刀-鋁料】</title>

    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/style.css">
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</head>

<style>

.N_type {
    background-color: #8f84d3 !important;
  }
  

</style>

<body>
    <div class="container">
        <div class="row">
            <!-- 側邊欄容器 -->
            <aside id="sidebar" class="col-md-2"></aside>

            <!-- 其他網頁內容 -->
            <div class="content col-md-8 ">
                <div class="form-container">
                    <div class="form-area">
                        <h2 id="section1">銑刀-鋁料</h2>
                        <form id="codeForm">
                            <fieldset>
                                <legend class="N_type">工件資料</legend>
                                <div class="form-group">
                                    <label for="model">型號：</label>
                                    <input type="text" id="model" name="model" class="form-control">
                                </div>

                                <div class="form-group">
                                    <label for="length">長度：</label>
                                    <input type="text" id="length" name="length" placeholder="只要輸入數字即可"
                                        class="form-control">
                                </div>

                                <div class="form-group">
                                    <label for="origin">工件原點：</label>
                                    <select id="origin" name="origin" class="form-control">
                                        <option value="(O--------)<br>(----------)">左上</option>
                                        <option value="(--------O)<br>(----------)">左下</option>
                                        <option value="(----------)<br>(O--------)">右上</option>
                                        <option value="(----------)<br>(--------O)">右下</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label for="coordinateG">坐標系G：</label>
                                    <select id="coordinateG" name="coordinateG" class="form-control">
                                        <option value="G54">G54</option>
                                        <option value="G55">G55</option>
                                        <option value="G56">G56</option>
                                        <option value="G57">G57</option>
                                        <option value="G58">G58</option>
                                    </select>
                                </div>
                            </fieldset>
                            <br>
                            <fieldset>
                                <legend class="N_type">請選擇幾個程式N</legend>
                                <div>
                                    <input type="checkbox" id="N1" name="N1" value="N1">
                                    <label for="N1">N1</label>
                                    <input type="checkbox" id="N2" name="N2" value="N2">
                                    <label for="N2">N2</label>
                                    <input type="checkbox" id="N3" name="N3" value="N3">
                                    <label for="N3">N3</label>
                                    <input type="checkbox" id="N4" name="N4" value="N4">
                                    <label for="N4">N4</label>
                                    <input type="checkbox" id="N5" name="N5" value="N5">
                                    <label for="N5">N5</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="N6" name="N6" value="N6">
                                    <label for="N6">N6</label>
                                    <input type="checkbox" id="N7" name="N7" value="N7">
                                    <label for="N7">N7</label>
                                    <input type="checkbox" id="N8" name="N8" value="N8">
                                    <label for="N8">N8</label>
                                    <input type="checkbox" id="N9" name="N9" value="N9">
                                    <label for="N9">N9</label>
                                    <input type="checkbox" id="N10" name="N10" value="N10">
                                    <label for="N10">N10</label>
                                </div>
                            </fieldset>
                            <br>
                            <div id="dynamicFieldsetArea"></div>
                            <br>
                            <div class="button-container">
                                <button id="generateButton" class="black-border-button" type="button"
                                    onclick="generateCode()">生成ε(*´･∀･｀)зﾞ</button>
                            </div>
                        </form>
                    </div>

                    <div class="result" id="result"></div>

                    <div id="code-container" style="display: flex; flex-direction: column;">
                        <a href="https://ncviewer.com/" class="black-border-button" target="_blank">CNC檢查</a>
                        <button id="copyButton" class="black-border-button" type="button">COPY-`д´-</button>
                        <button id="saveButton" class="black-border-button" type="button"
                            onclick="saveToFile()">SAVEฅ^•ﻌ•^ฅ</button>
                    </div>





                </div>
            </div>
        </div>
    </div>

    <script src="/js/milling_alu.js"></script>
    <script src="https://cdn.ckeditor.com/ckeditor5/38.1.1/classic/ckeditor.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.0.7/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>

</html>
