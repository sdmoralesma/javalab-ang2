// Defines interfaces that are common to all project

import {TreeNode} from "primeng/primeng";

export interface GlobalModel {
    description?:string;
    tags?:string[];
    terminal?:string;
    filesTree:FileNode[];
    config:ConfigNode;
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
    id:string;
    parentId?:string;
}

export interface ConfigNode {
    language:string;
    languageMode:string,
    initialNode:string,
    javaClasses:string[]
}
