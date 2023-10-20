export class Listing{
    constructor ( id, title, description, user, userSold, messages, images, datePosted, datePurchased ){
        this.id = id;
        this.title = title;
        this.description = description;
        this.user = user;
        this.userSold = userSold;
        this.messages = messages;
        this.images = images;
        this.datePosted = datePosted;
        this.datePurchased = datePurchased;
    }
}