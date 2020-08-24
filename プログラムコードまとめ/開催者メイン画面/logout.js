function logout_check(){
  if (window.confirm('ログアウトします。よろしいですか？'))
    location.href = "スタート画面のURL";
　}
  else{
    window.alert('ログアウトしませんでした。')
  }
}