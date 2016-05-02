import {MockResponse} from "./mock-response";
import {Injectable} from "angular2/core";

@Injectable()
export class JavalabService {
    getMockResponse() {
        return MockResponse;
    }

    // See the "Take it slow" appendix
    getHeroesSlowly() {
        return new Promise<any>(resolve =>
            setTimeout(()=>resolve(MockResponse), 2000) // 2 seconds
        );
    }
}