// Defines interfaces that are common to all project

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