export class Post {

    title: string;
    content: string;
    loveIts: number;
    created_at: Date;

    constructor(postTitle: string, postContent: string) {

        this.title = postTitle;
        this.content = postContent;
        this.loveIts = 0;
        this.created_at = new Date();
    }
}
