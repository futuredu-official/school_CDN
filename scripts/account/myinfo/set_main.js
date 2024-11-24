function set_main() {
	function Div_main() {
		return (
			<div class="flex flex-col justify-center items-center w-full">
				<div class="flex flex-col justify-start items-center w-[500px] p-[40px] space-y-[24px]
							sm:w-[380px] sm:p-[16px]">
		
					<div class="text-lg font-bold">
						내 정보
					</div>
		
					<div class="flex flex-col justify-center items-center text-start w-full space-y-[12px]">
						<div class="w-full space-y-[8px]">
							<span class="font-[500] text-[14px] w-full text-start">
								E-mail
							</span>
							<input type="text" id="txt_email"
								   class="bg-gray-100 border border-gray-900 text-gray-900 text-sm rounded-xl w-full cursor-not-allowed
										  focus:ring-gray-200 focus:border-gray-200" placeholder="" disabled />
						</div>
		
						<div class="flex justify-center items-center w-full py-[20px]"></div>
		
						<Div_textbox id="name" type="text" title="이름(본명)" function={() => input_checker()} />
						<div class="w-full space-y-[8px]">
							<span class="font-[500] text-[14px] w-full text-start">
								성별
							</span>
			
							<select id="sel_gender"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
								<option value="Male" selected >남성</option>
								<option value="Female">여성</option>
							</select>
						</div>
						<Div_textbox id="affiliation" type="text" title="소속" function={() => input_checker()} />
						<Div_textbox id="title" type="text" title="직위" function={() => input_checker()} />
		
						<div class="flex justify-center items-center w-full py-[20px]"></div>
		
						<div id="btn_submit" class="w-full">
							<Div_btn_submit class={class_btn_disabled} function={null} text={"정보 수정"} />
						</div>
					</div>
		
					<div class="flex justify-center items-center w-full">
						<svg width="420" height="2" viewBox="0 0 420 2" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 1H420" stroke="#262626"/>
						</svg>
					</div>
					
					<div class="flex flex-row justify-center items-center space-x-[4px] w-full">
						<span class="font-[500] text-[14px]">
							비밀번호를 변경하길 원하시나요?
						</span>
						<a href="/account/change_password/"
						class="font-[500] text-[14px] text-blue-700 cursor-pointer hover:underline">
							비밀번호 변경
						</a>
					</div>
				</div>
			</div>
		)
	}

	ReactDOM.render(<Div_main />, document.getElementById("div_contents"))
	get_userinfo()
}