var player;
var playBtn;
var pauseBtn;
var isPlaying; 
var file;
var source;
var isDark=true;
var myurl;
var isFullScn=false;
//////////////////////////////////////////////////////////////
window.onload=function()
{
    player=document.getElementById("player");
    playBtn=document.getElementById("playBtn");
    pauseBtn=document.getElementById("pauseBtn");
    file=document.getElementById("fileSelector");
    source=document.getElementById("videoSource");
    isPlaying=false;
    changetheme();
    var playname=window.opener.document.getElementById("openVideoName").value;
    source.src="../playlist/"+playname;
    //file.value="../playlist/"+playname;
    loadvideo(playname);
}

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
function playvideo()
{
    player.play();
    isPlaying=true;
    playBtn.style.display="none";
    pauseBtn.style.display="flex";
}
function pausevideo()
{
    player.pause();
    isPlaying=false;
    pauseBtn.style.display="none";
    playBtn.style.display="flex";
}
function loadvideo(playname)
{
    
    //player.src=file.files[0];
    /*myurl=URL.createObjectURL(file.files[0]);
    source.src=myurl;
    document.getElementById("name").textContent=file.files[0].name;
    var myDate=new Date(file.files[0].lastModified);
    */
    document.getElementById("name").textContent=playname;
    Array.from(document.getElementsByClassName("speedSelectorItem")).forEach((element)=>
        {
            element.style.backgroundColor="#f1f2f3";
        })
    document.getElementById("norspd").style.backgroundColor="deepskyblue"
    //document.getElementById("videoUpdateTime").textContent="日期："+myDate.getFullYear()+"-"+myDate.getMonth()+"-"+myDate.getDay()+"  "+myDate.getHours()+":"+myDate.getMinutes();
    //document.getElementById("videoSize").textContent="文件大小："+(parseFloat(file.files[0].size)/(1024*1024)).toFixed(2)+"MB";
    player.load();
}
function changetheme()
{

    if(isDark==true)
    {
        isDark=false;
        document.getElementById("darkBtn").src="res/switch-off.png";
        document.getElementById("stage").style.backgroundColor="rgba(240,240,240,0.85)"
        document.getElementById("title").style.color="#111111";
        document.getElementById("name").style.color="#111111";
        document.getElementById("titleline").style.borderColor="#F0F1F2";
        Array.from(document.getElementsByClassName("videoSetting")).forEach(element=>
            {
                element.style.color="#111111";
            })

    }
    else
    {
        isDark=true;
        document.getElementById("darkBtn").src="res/switch-on.png";
        document.getElementById("stage").style.backgroundColor="rgba(48,48,48,0.96)"
        document.getElementById("title").style.color="#f1f2f3";
        document.getElementById("name").style.color="#f1f2f3";
        document.getElementById("titleline").style.borderColor="#444444";
        Array.from(document.getElementsByClassName("videoSetting")).forEach(element=>
            {
                element.style.color="#f1f2f3";
            })
    }
    
    //document.getElementById("myCSS").href="src/PlayerStyleWhite.css";
}
function chgVol(vol)
{
    player.volume=vol;
    document.getElementById("myvol").textContent=" "+((parseFloat(vol))*100).toFixed(0)+"%";
}
function chgVolend()
{
    document.getElementById("myvol").textContent="音量";
}
function chgSpd(spd,btn)
{
    Array.from(document.getElementsByClassName("speedSelectorItem")).forEach((element)=>
        {
            element.style.backgroundColor="#f1f2f3";
        })
    btn.style.backgroundColor="deepskyblue";
    player.playbackRate=spd;
}
function chgBri(bri,res)
{
    document.getElementById("player").style.filter="brightness("+bri+")";
    if(res==true)
    {
        document.getElementById("bri").value=1.0;
    }
}
function chgSpdMethod(need)
{
    if(need == 1)
    {
        Array.from(document.getElementsByClassName("speedSelectorItem")).forEach((element)=>
        {
            element.style.display="none";
        })
        document.getElementById("customSpd").style.display="inline-block";
        document.getElementById("customSpd").value=1.0;

        document.getElementById("customSpdDisplay").style.display="inline-block";
    }
}
function chgSpd2(spd)
{
    player.playbackRate=spd;
    document.getElementById("customSpdDisplay").textContent=spd+"x";
}
function downloadvideo()
{
    var downloadLink=document.getElementById("down");
    downloadLink.href=videoSource.src;
    downloadLink.download=videoSource.src+".mp4";
    downloadLink.click();
}
function reloadvideo()
{
    player.load();
    isPlaying=false;
    pauseBtn.style.display="none";
    playBtn.style.display="flex";
}
function fullscreen()
{
    var vplayer=document.getElementById("playerBody");
    vplayer.requestFullscreen();
    isFullScn=true;
    document.getElementById("fullscnBtn").style.display="none";
    document.getElementById("fullscnCanBtn").style.display="inline-flex";
}
function fullscreencancel()
{
    isFullscn=false;
    document.exitFullscreen();
    document.getElementById("fullscnBtn").style.display="inline-flex";
    document.getElementById("fullscnCanBtn").style.display="none";
}