// listening for click on button
document.querySelector(`#random_button`).addEventListener(`click`, do_this);
// once button is clicked a request is sent to api
function do_this (activity) {
    axios.request({
        url: `http://www.boredapi.com/api/activity/`
    }).then(successFunction).catch(failureFunction);
}
// if the api successfully responds, it will take the object inside data array and print the activity
function successFunction(response222) {
    
    document.body.insertAdjacentHTML(`beforeend`, `<h2> Do this activity if you're bored: ${response222[`data`][`activity`]}`);
}
// just in case it fails to receive data from api
function failureFunction(error333333333) {
        document.body.insertAdjacentHTML(`beforeend`, `<h1> failed</h1>`);
    
}