function set_main() {
	function Div_main() {
		return (
			<div class="flex flex-col justify-center items-center w-full py-16 space-y-2">
				<div class="flex flex-row justify-center items-center space-x-2">
					<img src="https://cdn.jsdelivr.net/gh/statground/statkiss_CDN/images/svg/waving_hand.svg" class="w-16 h-16 mr-2" />
					<span class="text-2xl font-bold">환영합니다.</span>
				</div>

				<span class="text-xl">
					Futuredu에 오신 것을 환영합니다.<br/>
					여기서 얻은 인사이트를 통해 교육 방법을 혁신하고 학생들의 성장을 더욱 촉진시킬 수 있기를 바랍니다.<br/>
					교육의 미래를 함께 만들어 가는 여정에 교사님의 열정과 전문성이 큰 빛을 발할 것입니다.
				</span>

				<br/>

				<button type="button" onClick={() => location.href="/"}
						class="py-1.5 px-5 text-white bg-blue-700 font-medium rounded-lg text-sm w-full md:w-auto text-center
							   hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
					첫 화면으로
				</button>
			</div>
		)
	}

	ReactDOM.render(<Div_main />, document.getElementById("div_contents"))
}