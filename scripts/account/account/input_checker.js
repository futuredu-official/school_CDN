function input_checker() {
	let class_desc_msg = "flex flex-row justify-start items-center w-full"
	
	// 메시지 초기화
	document.getElementById("desc_email_msg").className = "hidden"
	document.getElementById("desc_password_msg").className = "hidden"

	ReactDOM.render(<Div_btn_submit id={"btn_submit"} class={class_btn_disabled} function={null} text={"로그인"} />, document.getElementById("btn_submit"))

	// 이메일을 입력하지 않음
	if (email_form_check("txt_email") == "NOT EXIST") {
		document.getElementById("desc_email_msg").className = class_desc_msg
		ReactDOM.render(<Div_desc_err_msg text="이메일을 입력해주세요."/>, document.getElementById("desc_email_msg"))

	// 이메일 형식이 올바르지 않음
	} else if(email_form_check("txt_email") == "FAILED") {
		document.getElementById("desc_email_msg").className = class_desc_msg
		ReactDOM.render(<Div_desc_err_msg text="이메일 형식이 잘못되었습니다."/>, document.getElementById("desc_email_msg"))


	// 비밀번호를 입력하지 않음
	} else if(password_form_check("txt_password") == "NOT EXIST") {
		document.getElementById("desc_password_msg").className = class_desc_msg
		ReactDOM.render(<Div_desc_err_msg text="비밀번호를 입력해주세요."/>, document.getElementById("desc_password_msg"))

	// 비밀번호의 길이가 8자 미만으로 입력되었음
	} else if(password_form_check("txt_password") == "FAILED") {
		document.getElementById("desc_password_msg").className = class_desc_msg
		ReactDOM.render(<Div_desc_err_msg text="비밀번호는 8자 이상이어야 합니다."/>, document.getElementById("desc_password_msg"))

	} else {
		ReactDOM.render(<Div_btn_submit class={class_btn_enabled} function={() => click_btn_submit()} text={"로그인"} />, document.getElementById("btn_submit"))
		
	}
}