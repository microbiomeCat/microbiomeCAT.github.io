// from https://github.com/cjh0613/blog/blob
var cjhurl;
cjhurl = window.location.host;
pthurl = window.location.pathname;
var lang = navigator.language||navigator.userLanguage;//常规浏览器语言和IE浏览器
lang = lang.substr(0, 2);//截取lang前2位字符
  //  $(document).ready(function () {
function safeOpenUrl(url) {
    var newTab = window.open();
    newTab.opener = null;
    newTab.location = url;
  }
if(cjhurl == 'microbiomecat.gitee.io'){}
else{if(lang == 'zh'){
	layer.confirm('检测到您使用中文但访问本站境外服务器，建议访问速度快的 Gitee 备用站', {
		title:"等待网页加载……",
  btn: ['Gitee备用站'] ,//按钮
  shade: 0
}, function(){
  safeOpenUrl("microbiomecat.gitee.io"+pthurl);
})
}}
   // });
$(document).ready(function () {
var $runtimeCount = $('#webinfo-runtime-count')
    var startDate = $runtimeCount.attr('start_date')
    var showDateTime = function () {
      var BirthDay = new Date(startDate)
      var today = new Date()
      var timeold = (today.getTime() - BirthDay.getTime())
      var daysold = Math.floor(timeold / (24 * 60 * 60 * 1000))
      $('#webinfo-runtime-count').text(daysold + ' ' + '天')
    }
    var interval
    showDateTime()
    clearInterval(interval)
    interval = setInterval(showDateTime, 10000)
    if(lang == 'zh'){
    if(cjhurl == 'microbiomecat.xyz'){}
else if(cjhurl == 'microbiomecat.gitee.io'){$(".post").prepend('<div class="post-excerpt"><div class="note-plugin success no-icon"><p><strong>提示</strong><br>检测到您正通过本站Gitee服务器进行访问。<br>建议您先在此浏览，<strong>如要收藏或分享本页，请使用本站 <a href="'+"https://microbiomecat.xyz"+pthurl+'" target="_blank" rel="noopener">Github服务器</a></strong></p></div></div>');}
else if(cjhurl == 'microbiomecat.github.io'){$(".post").prepend('<div class="post-excerpt"><div class="note-plugin success no-icon"><p><strong>提示</strong><br>检测到您正通过本站Github服务器进行访问，此服务器在国内使用并不流程。如果宕机可访问Gitee服务器，<a href="'+"https://microbiomecat.gitee.io"+pthurl+'" target="_blank" rel="noopener">Gitee服务器</a><br>如要收藏本页，请前往本站独立域名网站 <a href="'+"https://microbiomecat.xyz"+pthurl+'" target="_blank" rel="noopener">Github服务器</a> 后再收藏</p></div></div>');}

    }
    $(".reward-qrcode").attr("style","opacity: 1; display: block; transform: translateY(0px);");});