export interface InstagramFeed {
    data: Datum[];
    paging: Paging;
}

export interface Datum {
    id: string;
    media_type: string;
    caption: string;
    media_url: string;
    permalink: string;
    timestamp: string;
}

export interface Paging {
    cursors: Cursors;
    next: string;
}

export interface Cursors {
    before: string;
    after: string;
}

import listInstagram from '../data/instagramFeed.json'

export const feedInstagram: InstagramFeed = listInstagram