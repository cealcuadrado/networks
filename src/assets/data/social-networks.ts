import { SocialNetwork } from '../../app/shared/interfaces/social-network';
import {faGithub, faSoundcloud, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';

export const SOCIALNETWORKS: SocialNetwork[] = [
    {
        title: 'Twitter',
        url: 'https://www.twitter.com',
        icon: faTwitter
    },
    {
        title: 'YouTube',
        url: 'https://www.youtube.com',
        icon: faYoutube
    },
    {
        title: 'SoundCloud',
        url: 'https://www.soundcloud.com',
        icon: faSoundcloud
    },
    {
        title: 'GitHub',
        url: 'https://www.github.com',
        icon: faGithub
    }
];
