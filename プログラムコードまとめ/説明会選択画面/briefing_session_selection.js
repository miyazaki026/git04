//マウスに追従する画像の位置指定
function MouseXY() {
	X=document.body.scrollLeft+event.x;
	Y=document.body.scrollTop+event.y;
	document.all["Obj_1"].style.left=X-50;
	document.all["Obj_1"].style.top=Y-40;
	document.onmousemove=MouseXY;
}

//ブース選択確認ダイアログ
function booth(){
	ret = confirm("この企業の説明会に参加します。よろしいですか？");
	if (ret == true){
		location.href = " ";
	}
}

//休憩室選択確認ダイアログ
function rest(){
	ret = confirm("この休憩スペースに参加します。よろしいですか？");
	if (ret == true){
		location.href = " ";
	}
}

//メインメニューへ戻る確認ダイアログ
function mainmenu(){
	ret = confirm("メインメニューへ戻ります。よろしいですか？");
	if (ret == true){
		location.href = " ";
	}
}

