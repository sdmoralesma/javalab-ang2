// Defines interfaces that are common to all project

import {EventEmitter} from "@angular/core";

export interface GlobalModel {
    description?: string;
    tags?: string[];
    terminal?: string;
    filesTree: FileNode[];
    config: ConfigNode;
}

export interface MenuItem {
    label?: string;
    icon?: string;
    command?: (event?: any) => void;
    url?: string;
    routerLink?: any;
    eventEmitter?: EventEmitter<any>;
    items?: MenuItem[];
    expanded?: boolean;
}

export interface FileNode {
    // inherited
    label?: string;
    data?: any;
    icon?: any;
    expandedIcon?: any;
    collapsedIcon?: any;
    children?: FileNode[];
    leaf?: boolean;
    // new fields
    id: string;
    parentId?: string;
}

export interface ConfigNode {
    language: string;
    languageMode: string,
    initialNode: string,
    javaClasses: string[]
}
