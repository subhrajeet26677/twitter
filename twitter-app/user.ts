import { UserProfile } from "./profile";
import { Tweet } from "./tweet";
import { iTweet } from "./iTweet";

export class User {
    id: number;
    name: string;
    profilePic: string;
    handle: string;
    profile: UserProfile;
    tweetsender: iTweet;

    tweet() {
        var tweet = new Tweet();
        tweet.body = "This is my Tweet";
        this.tweetsender.postTweet();
    }
}