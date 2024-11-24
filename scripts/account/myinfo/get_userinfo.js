async function get_userinfo() {
	const data = await fetch("/account/ajax_get_userinfo/")
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	document.getElementById("txt_email").value = data.email
	document.getElementById("txt_name").value = data.name
	document.getElementById("sel_gender").value = data.gender
	document.getElementById("txt_affiliation").value = data.affiliation
	document.getElementById("txt_title").value = data.title

	uuid_user = data.uuid
	uuid_role = data.uuid_role
	uuid_join_service = data.uuid_join_service

	input_checker()
}