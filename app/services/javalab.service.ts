import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, RequestMethod, ResponseContentType} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {FileNode, GlobalModel} from "../common";
import fileSaver = require("file-saver");

const BASE = "http://localhost:48080/rest/process";

@Injectable()
export class JavalabService {

    constructor(private http: Http) {
    }

    initialize(lang: string) {
        let url = BASE + "/init" + lang;
        return this.http.get(url)
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error("An error occurred:", error);
        return Promise.reject(error.message || error);
    }

    runCode(model: GlobalModel) {
        let runCodeURL = BASE + "/run";
        let body = JSON.stringify(model);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post(runCodeURL, body, options)
            .toPromise()
            .then(res => res.json())
            .catch(error => this.handleError);
    }

    testCode(model: GlobalModel) {
        let testCodeURL = BASE + "/test";
        let body = JSON.stringify(model);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post(testCodeURL, body, options)
            .toPromise()
            .then(res => res.json())
            .catch(error => this.handleError);
    }


    findNodeById(id: string, tree: FileNode[]): FileNode {
        for (var node of tree) {
            var found = this.searchNode(id, node);
            if (found !== null) {
                return found;
            }
        }
    }

    private searchNode(id: string, node: FileNode) {
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

    download(model: GlobalModel) {
        this.http.post(BASE + "/download", JSON.stringify(model), {
            method: RequestMethod.Post,
            responseType: ResponseContentType.Blob,
            headers: new Headers({'Content-type': 'application/json'})
        }).subscribe(
            (response) => {
                var blob = new Blob([response.blob()], {type: 'application/zip'});
                var filename = 'test.zip';
                fileSaver.saveAs(blob, filename);
            }
        );
    }
}