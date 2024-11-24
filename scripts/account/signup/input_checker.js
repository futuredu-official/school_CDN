function input_checker() {
	let class_desc_msg = "flex flex-row justify-start items-center w-full"
	
	// 메시지 초기화
	document.getElementById("desc_email_msg").className = "hidden"
	document.getElementById("desc_password_msg").className = "hidden"
	document.getElementById("desc_password_confirm_msg").className = "hidden"
	document.getElementById("desc_name_msg").className = "hidden"
	document.getElementById("desc_affiliation_msg").className = "hidden"
	document.getElementById("desc_title_msg").className = "hidden"
	ReactDOM.render(<Div_btn_submit id={"btn_submit"} class={class_btn_disabled} function={null} text={"회원가입"} />, document.getElementById("btn_submit"))

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

	// 비밀번호 확인을 입력하지 않음
	} else if(password_form_check("txt_password_confirm") == "NOT EXIST") {
		document.getElementById("desc_password_confirm_msg").className = class_desc_msg
		ReactDOM.render(<Div_desc_err_msg text="'비밀번호 확인'을 입력해주세요."/>, document.getElementById("desc_password_confirm_msg"))

	// 비밀번호 확인의 길이가 8자 미만으로 입력되었음
	} else if(password_form_check("txt_password_confirm") == "FAILED") {
		document.getElementById("desc_password_confirm_msg").className = class_desc_msg
		ReactDOM.render(<Div_desc_err_msg text="비밀번호 확인'은 8자 이상이어야 합니다."/>, document.getElementById("desc_password_confirm_msg"))

	// 비밀번호 확인의 길이가 8자 미만으로 입력되었음
	} else if(document.getElementById("txt_password").value.trim() != document.getElementById("txt_password_confirm").value.trim()) {
		document.getElementById("desc_password_confirm_msg").className = class_desc_msg
		ReactDOM.render(<Div_desc_err_msg text="비밀번호와 비밀번호 확인이 일치하지 않습니다."/>, document.getElementById("desc_password_confirm_msg"))


	// 이름이 입력되지 않음
	} else if(document.getElementById("txt_name").value.trim().length <= 0) {
		document.getElementById("desc_name_msg").className = class_desc_msg
		ReactDOM.render(<Div_desc_err_msg text="이름을 입력해주세요."/>, document.getElementById("desc_name_msg"))

	// 소속이 입력되지 않음
	} else if(document.getElementById("txt_affiliation").value.trim().length <= 0) {
		document.getElementById("desc_affiliation_msg").className = class_desc_msg
		ReactDOM.render(<Div_desc_err_msg text="소속을 입력해주세요."/>, document.getElementById("desc_affiliation_msg"))

	// 직위가 입력되지 않음
	} else if(document.getElementById("txt_title").value.trim().length <= 0) {
		document.getElementById("desc_title_msg").className = class_desc_msg
		ReactDOM.render(<Div_desc_err_msg text="직위를 입력해주세요."/>, document.getElementById("desc_title_msg"))

	} else {
		ReactDOM.render(<Div_btn_submit class={class_btn_enabled} function={() => click_btn_submit()} text={"회원가입"} />, document.getElementById("btn_submit"))
		

	}
}