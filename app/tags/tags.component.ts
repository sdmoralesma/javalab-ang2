import {Component} from "@angular/core";
import {TagService} from "../services/tag.service";

@Component({
    selector: 'tags',
    templateUrl: './app/tags/tags.html'
})
export class TagsComponent {

    selectedTags: any[];
    tagsSuggested: any[];
    errorMessage: string;

    constructor(private tagService: TagService) {
    }

    filterTagsMultiple(event) {
        let query = event.query;
        this.tagService.getTags()
            .subscribe(
                tags => this.tagsSuggested = this.filterTags(query, tags),
                error => this.errorMessage = <any>error);
    }

    private filterTags(query, tagList: string[]): string[] {
        let filtered: string[] = [];
        for (let i = 0; i < tagList.length; i++) {
            let tag = tagList[i];
            if (tag.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(tag);
            }
        }
        return filtered;
    }

}