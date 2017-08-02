import { Tweet } from './tweet.model';

export interface State {
    info: {[id: string]: Tweet};
    list: string[];
}

const initialValue: State = {
    info: {},
    list: []
};

export function appReducer(state: State = initialValue, action: {type, payload}): State {
    const payload = action.payload;
    switch(action.type) {
        case 'TWEETS_LOADED': {
            return Object.assign({}, state, {
                info: Object.assign({}, state.info, payload.reduce((acc, tweet) => {
                    acc[tweet.id] = tweet;
                    return acc;
                }, {})),
                list: payload.map((tweet: Tweet) => tweet.id)
            });
        }
        case 'TWEET_LOADED': {
            return Object.assign({}, state, {
                info: Object.assign({}, state.info, {
                    [payload.id]: payload
                })
            });
        }
        default: {
            return state;
        }
    }
}
