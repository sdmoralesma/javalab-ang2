export var MockResponse:any = {
    "console": "Welcome to Javalab v0.3.0 !\r\n$ java -version : 1.8.0_66 Java HotSpot(TM) 64-Bit Server VM",
    "filesTree": [
        {
            "id": 1,
            "label": "dependencies",
            "icon": "fa-file-text-o",
            "data": "testCompile 'junit:junit:+'\n",
            "children": []
        },
        {
            "id": 2,
            "label": "src/main/java/",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder",
            "children": [{
                "label": "com.company.project",
                "icon": "fa fa-th-large",
                "children": [{
                    "id": 21,
                    "label": "HelloWorld.java",
                    "icon": "fa-file-text-o",
                    "data": "package com.company.project;\n\npublic class HelloWorld {\n\n    public static void main(String[] args) {\n        System.out.println(\"hello world java!\");\n    }\n\n}\n",
                    "cursor": "",
                    "children": []
                }]
            }]
        },
        {
            "id": 3,
            "label": "src/test/java/",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder",
            "children": [{
                "id": 31,
                "label": "com.company.project",
                "icon": "fa fa-th-large",
                "children": [{
                    "id": 311,
                    "label": "HelloWorldTest.java",
                    "icon": "fa-file-text-o",
                    "data": "package com.company.project;\n\nimport org.junit.*;\n\npublic class HelloWorldTest {\n\n    @Test\n    public void test() {\n        Assert.assertEquals(1, 1);\n    }\n}\n",
                    "cursor": "",
                    "children": []
                }]
            }]
        }
    ],
    "runnableNode": {"mainClass": false, "testClass": false},
    "initConfig": {
        "language": "java",
        "languageMode": "ace/mode/java",
        "javaClasses": [{
            "label": "HelloWorld.java",
            "path": "com.company.project.HelloWorld"
        }, {"label": "HelloWorldTest.java", "path": "com.company.project.HelloWorldTest"}]
    }
};
