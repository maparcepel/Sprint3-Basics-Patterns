class Topic {

    constructor(name) {
        this.name = name;
        this.subscriptors = [];
        this.comments = [];
    }

    addSubscriptor(user) {
        this.subscriptors.push(user);
    }

    addComment(comment) {
        this.comments.push(comment);
        this.notifySubscriptors();

    }

    notifySubscriptors() {
        this.subscriptors.forEach(subscriptor => {
            subscriptor.updateInbox(this.comments);
        });
    }
}

module.exports = Topic;