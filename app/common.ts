// Defines interfaces that are common to all project

import {TreeNode} from "primeng/primeng";

export interface GlobalModel {
    description?:string;
    tags?:string[];
    terminal?:string;
    filesTree:FileNode[];
    config:ConfigNode;
}

export interface FileNode extends TreeNode {
    id:string;
    parentId?:string;
}

export interface ConfigNode {
    language:string;
    languageMode:string,
    initialNode:string,
    javaClasses:string[]
}
