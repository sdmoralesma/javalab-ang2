// Defines interfaces that are common to all project

export interface GlobalModel {
    description?:string;
    tags?:string[];
    terminal?:string;
    filesTree:FileNode[];
    config:ConfigNode;
}

export interface FileNode {
    id:string;
    label?:string;
    data?:any;
    icon?:any;
    expandedIcon?:any;
    collapsedIcon?:any;
    parentId?:string;
    children?:FileNode[];
    leaf?:boolean;
}

export interface ConfigNode {
    language:string;
    languageMode:string,
    initialNode:string,
    javaClasses:string[]
}
