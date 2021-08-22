$(function () {
	$(".name-text").fadeIn(1250);
	$(".aboutme-text").delay(1250).fadeIn(1250);
	$(".box-1").slideDown(400);
	$(".box-2").slideDown(600);
	$(".box-3").slideDown(800);
	$(".box-4").slideDown(1000);

	for (let i = 1; i < 5; i++) {
		$(".hover-event" + i).hover(
			function () {
				$(".drop-list" + i)
					.stop()
					.toggle("slide");
			},
			function () {
				$(".drop-list" + i)
					.stop()
					.toggle("slide");
			}
		);
	}
	$(".flash-close").click(function () {
		$(".flash").toggle("slide");
	});
	$(".flash-banner").delay(2000).fadeOut(1000);

	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	const forms = document.querySelectorAll(".needs-validation");

	// Loop over them and prevent submission
	Array.from(forms).forEach(function (form) {
		form.addEventListener(
			"submit",
			function (event) {
				if (!form.checkValidity()) {
					event.preventDefault();
					event.stopPropagation();
				}

				form.classList.add("was-validated");
			},
			false
		);
	});
});
