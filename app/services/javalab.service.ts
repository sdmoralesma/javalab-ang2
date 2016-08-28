import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {FileNode, GlobalModel} from "../common";

const BASE = "rest/process";

@Injectable()
export class JavalabService {

    constructor(private http:Http) {
    }

    initialize(lang:string) {
        let url = BASE + "/init" + lang;
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
        let runCodeURL = BASE + "/run";
        let body = JSON.stringify(model);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post(runCodeURL, body, options)
            .toPromise()
            .then(res => res.json())
            .catch(error => this.handleError);
    }

    testCode(model:GlobalModel) {
        let testCodeURL = BASE + "/test";
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
        // Xhr creates new context so we need to create reference to this
        let self = this;
        var pending:boolean = true;

        // Create the Xhr request object
        let xhr = new XMLHttpRequest();

        let url = BASE + "/download";
        xhr.open('POST', url, true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.responseType = 'blob';

        // Xhr callback when we get a result back
        // We are not using arrow function because we need the 'this' context
        xhr.onreadystatechange = function () {

            // We use setTimeout to trigger change detection in Zones
            setTimeout(() => {
                pending = false;
            }, 0);

            // If we get an HTTP status OK (200), save the file using fileSaver
            if (xhr.readyState === 4 && xhr.status === 200) {
                var blob = new Blob([this.response], {type: 'application/zip'});
                saveAs(blob, 'project.zip');
            }
        };

        // Start the Ajax request
        xhr.send(JSON.stringify(model));
    }
}