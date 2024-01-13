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
