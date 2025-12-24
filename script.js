document.getElementById("signup-form").addEventListener("submit",function(e) {
	e.preventDefault();

	const formData=new FormData(this);
	const data=Object.fromEntries(fromData.entries());
	console.log("Submitted Data:",data);
	alert("Form submitted successfully!");
});