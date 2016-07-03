import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {FileNode, GlobalModel} from "./common";

@Injectable()
export class JavalabService {

    constructor(private http:Http) {
    }

    initialize() {
        let url = "assets/json/mock-response.json";
        // let url = "http://localhost:48080/rest/process/init/java";
        return this.http.get(url)
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error:any) {
        console.error("An error occurred:", error);
        return Promise.reject(error.message || error);
    }

    runCode(model:GlobalModel) {
        let runCodeURL = "http://localhost:48080/rest/process/run";
        let body = JSON.stringify(model);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post(runCodeURL, body, options)
            .toPromise()
            .then(res => res.json())
            .catch(error => this.handleError);
    }

    testCode(model:GlobalModel) {
        let testCodeURL = "http://localhost:48080/rest/process/test";
        let body = JSON.stringify(model);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post(testCodeURL, body, options)
            .toPromise()
            .then(res => res.json())
            .catch(error => this.handleError);
    }


    findNodeById(id:string, tree:FileNode[]):FileNode {
        for (var node of tree) {
            var found = this.searchNode(id, node);
            if (found !== null) {
                return found;
            }
        }
    }

    private searchNode(id:string, node:FileNode) {
        if (node.id === id) {
            return node;
        } else if (node.children !== null && node.children !== undefined) {
            var result = null;
            for (var i = 0; result === null && i < node.children.length; i++) {
                result = this.searchNode(id, node.children[i]);
            }
            return result;
        }
        return null;
    }


    download(model:GlobalModel) {
        let downloadURL = "http://localhost:48080/rest/process/download";
        let body = JSON.stringify(model);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post(downloadURL, body, options)
            .toPromise()
            .catch(error => this.handleError);
    }
}