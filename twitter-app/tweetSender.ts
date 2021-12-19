import { iTweet } from "./iTweet";

export class TweetSender implements iTweet {
    postTweet() {
        console.log("tweet is posted");
    }
}