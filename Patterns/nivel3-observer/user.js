class User {
    constructor(name) {
        this.name = name;
        this.inbox = [];
    }

    updateInbox(comments) {
        this.inbox = comments;
    }
}

module.exports = User;