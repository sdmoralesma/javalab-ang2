System.register([], function(exports_1) {
    var MockResponse;
    return {
        setters:[],
        execute: function() {
            exports_1("MockResponse", MockResponse = {
                "console": "Welcome to Javalab v0.3.0 !\r\n$ java -version : 1.8.0_66 Java HotSpot(TM) 64-Bit Server VM",
                "treedata": [{
                        "id": 1,
                        "name": "dependencies",
                        "type": "file",
                        "code": "testCompile 'junit:junit:+'\n",
                        "children": []
                    }, {
                        "id": 2,
                        "name": "src/main/java/",
                        "type": "folder",
                        "children": [{
                                "id": 21,
                                "name": "com.company.project",
                                "type": "folder",
                                "children": [{
                                        "id": 211,
                                        "name": "HelloWorld.java",
                                        "type": "file",
                                        "code": "package com.company.project;\n\npublic class HelloWorld {\n\n    public static void main(String[] args) {\n        System.out.println(\"hello world java!\");\n    }\n\n}\n",
                                        "cursor": "",
                                        "children": []
                                    }]
                            }]
                    }, {
                        "id": 3,
                        "name": "src/test/java/",
                        "type": "folder",
                        "children": [{
                                "id": 31,
                                "name": "com.company.project",
                                "type": "folder",
                                "children": [{
                                        "id": 311,
                                        "name": "HelloWorldTest.java",
                                        "type": "file",
                                        "code": "package com.company.project;\n\nimport org.junit.*;\n\npublic class HelloWorldTest {\n\n    @Test\n    public void test() {\n        Assert.assertEquals(1, 1);\n    }\n}\n",
                                        "cursor": "",
                                        "children": []
                                    }]
                            }]
                    }],
                "runnableNode": { "id": "undefined", "mainClass": false, "testClass": false },
                "initConfig": {
                    "language": "java",
                    "languageMode": "ace/mode/java",
                    "javaClasses": [{
                            "id": 211,
                            "name": "HelloWorld.java",
                            "path": "com.company.project.HelloWorld"
                        }, { "id": 311, "name": "HelloWorldTest.java", "path": "com.company.project.HelloWorldTest" }]
                }
            });
        }
    }
});
//# sourceMappingURL=mock-response.js.map