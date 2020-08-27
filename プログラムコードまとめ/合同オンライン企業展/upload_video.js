function upload_check(){
　if (video.file.value == ""){
    window.alert("動画が選択されていません。");
    return false;
  }else{
    ret = confirm("この動画をアップロードします。よろしいですか？")
    if (ret == true){
      window.alert("動画をアップロードしました。");
      return false;
    }else{
      window.alert("動画のアップロードに失敗しました。");
    }
  }
}