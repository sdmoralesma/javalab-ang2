import {MockResponse} from './mock-response';
import {Injectable} from 'angular2/core';

@Injectable()
export class JavalabService {
    static getHeroes() {
        return Promise.resolve(MockResponse);
    }

    // See the "Take it slow" appendix
    getHeroesSlowly() {
        return new Promise<any>(resolve =>
            setTimeout(()=>resolve(MockResponse), 1000) // 1 seconds
        );
    }
}