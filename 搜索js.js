let search = document.getElementById("search"); // 获取搜索框元素
let searchBtn = document.getElementById("searchBtn"); // 获取搜索按钮元素
let audio = document.getElementById("audio"); // 获取音频元素
// const defaultUrlHeader = "https://autumnfish.cn/";  // 默认URL头部1
const defaultUrlHeader = "http://musicapi.leanapp.cn"; // 默认URL头部2
const songsUrlHeader = "http://music.163.com"; // 音乐URL头部

// AJAX请求函数
function AjaxRequest(url, operationFun) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            operationFun(JSON.parse(xhttp.responseText));
            console.log(JSON.parse(xhttp.responseText));
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

// 根据关键字点击搜索
searchBtn.onclick = function () {
    let searchKeywords = search.value;
    if (searchKeywords == "") {
        searchKeywords = search.placeholder;
    }
    let keywordsUrl =
        defaultUrlHeader + "/search/suggest?keywords=" + searchKeywords;
    AjaxRequest(keywordsUrl, renderTheFirstSong);
};

// 更换音频URL，默认播放第一条结果
function renderTheFirstSong(responseText) {
    audio.src =
        songsUrlHeader +
        "/song/media/outer/url?id=" +
        responseText.result.songs[0].id +
        ".mp3";
}