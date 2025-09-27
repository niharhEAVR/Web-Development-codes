class Link {
    constructor(serverName, serverLink, serverId) {
        this.serverName = serverName;
        this.serverLink = serverLink;
        this.serverId = serverId;
        // if you want to know why the dom is using the class constructor the checks the 05_notes.md
        document
            .querySelector('button')
            .addEventListener('click', this.providelink.bind(this))
        // if you dont understand the working of this bind in here look 05_notes2.md
    }


    providelink() {
        console.log(`Here is the Link of the server:\n${this.serverLink}`)
    }
}

let link1 = new Link("cluster", "http://cluster.com", "12.34.67.01")

let link2 = new Link("booster", "http://booster.com", "12.34.67.01")