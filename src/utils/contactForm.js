/*$("#email-form-1 form").on("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(this);
    const response = await fetch(this.action, {
        method: 'POST',
        body: formData,
    });
    if (response.ok) {
        // Display message
        console.log("Message was sent.")
    } else {
        // Display something went wrong.
        console.log("Something went wrong.")
    }
})*/
/*
document.querySelector('#email-form-1 form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(this);
    const response = await fetch(this.action, {
        method: 'POST',
        body: formData,
    });
    if (response.ok) {
        // Display message
        console.log("Message was sent.")
    } else {
        // Display something went wrong.
        console.log("Something went wrong.")
    }
});

console.log(document.getElementById("#email-form-1"));
*/

$.ajax({
    method: 'POST',
    url: 'https://formsubmit.co/ajax/andi.poplas@gmail.com',
    dataType: 'json',
    accepts: 'application/json',
    data: {
        name: "FormSubmit",
        message: "I'm from Devro LABS"
    },
    success: (data) => console.log(data),
    error: (err) => console.log(err)
});