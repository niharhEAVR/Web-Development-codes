let requestUrl = 'https://api.github.com/users/Nihar-Debnath'
const xhr = new XMLHttpRequest() // this is an object

xhr.open('GET', requestUrl)
xhr.onreadystatechange = function () {
    console.log(xhr.readyState) // request already initialized thats why 0  will not print
    if (xhr.readyState === 4) {
        let data = JSON.parse(this.responseText) //'this' keyword refers to 'xhr' because you’re inside a method of the XMLHttpRequest or (xhr) object. (so instead of using (xhr.responseText) i can use (this.responseText) both are the same thing ), more explanation downward

        console.log(this.responseText)
        console.log(typeof (this.responseText)) //because its a string value thats why we need to convert into js object, then we can use the object key values
        console.log(data)
        console.log(typeof data)

        let url = data.avatar_url
        let name = data["name"]
        let followers = data["followers"]
        let image = document.querySelector('.card')
        image.innerHTML = `<img src = "${url}" id = "img">
                                    <h1>Name: ${name}</h1>
                                    <h3>Followers: ${followers}</h3>
                                    <p>Don't compare the name with the Photo, because its my Github Photo.</p>`
    }
}
xhr.send()