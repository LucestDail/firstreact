export const startingNodes = [
    {
        "id": "node-0d9d4733-e48c-41fd-a41f-d93cc4718d97",
        "type": "start",
        "name": "start",
        "path": [
            "0"
        ]
    },
    {
        "id": "node-924c6ee4-0739-4bb5-b0ae-d5146ab43a39",
        "type": "node",
        "name": "普通节点",
        "path": [
            "1"
        ],
        "configuring": false,
        "data": {
            "name": "Configure Ticket Type / Assignee Group"
        },
        "validateStatusError": false
    },
    {
        "id": "branch-98e4f0b3-8680-4b13-bcbb-0eba67c2137b",
        "type": "branch",
        "name": "分支节点",
        "children": [
            {
                "id": "condition-b4cae07a-a769-4fbe-9095-3eee2cd1daca",
                "type": "condition",
                "name": "条件节点",
                "children": [
                    {
                        "id": "node-4317e575-4d06-49e5-89dd-25b3feb599d7",
                        "type": "node",
                        "name": "普通节点",
                        "path": [
                            "2",
                            "children",
                            "0",
                            "children",
                            "0"
                        ],
                        "configuring": false,
                        "data": {
                            "name": "Send Dispatch Event"
                        },
                        "validateStatusError": false
                    }
                ],
                "path": [
                    "2",
                    "children",
                    "0"
                ],
                "configuring": false,
                "data": {
                    "name": "Is ticket created ?"
                },
                "validateStatusError": false
            }
        ],
        "path": [
            "2"
        ]
    },
    {
        "id": "branch-55ce0fac-fc82-4420-9edf-e16a198fd332",
        "type": "branch",
        "name": "分支节点",
        "children": [
            {
                "id": "condition-b28ffbae-e88a-4fb5-976a-64c655a970c3",
                "type": "condition",
                "name": "条件节点",
                "children": [
                    {
                        "id": "node-0d73f60a-f578-49fe-9554-6803b569329f",
                        "type": "node",
                        "name": "普通节点",
                        "path": [
                            "3",
                            "children",
                            "0",
                            "children",
                            "0"
                        ],
                        "configuring": false,
                        "data": {
                            "name": "Set Ticket group to Unassigned"
                        },
                        "validateStatusError": false
                    }
                ],
                "path": [
                    "3",
                    "children",
                    "0"
                ],
                "configuring": false,
                "data": {
                    "name": "Is group not configured ?"
                },
                "validateStatusError": false
            },
            {
                "id": "condition-8882bbcd-c1fa-447a-b27f-60530cd89904",
                "type": "condition",
                "name": "条件节点",
                "children": [
                    {
                        "id": "branch-d4873841-31a5-42ca-b41e-e42fbc8840c9",
                        "type": "branch",
                        "name": "分支节点",
                        "children": [
                            {
                                "id": "condition-ed730996-c5da-4f41-b76b-5a3fe0e455ee",
                                "type": "condition",
                                "name": "条件节点",
                                "children": [
                                    {
                                        "id": "node-b045f5ca-c496-4da4-b650-83b860a87581",
                                        "type": "node",
                                        "name": "普通节点",
                                        "path": [
                                            "3",
                                            "children",
                                            "1",
                                            "children",
                                            "0",
                                            "children",
                                            "0",
                                            "children",
                                            "0"
                                        ],
                                        "configuring": false,
                                        "data": {
                                            "name": "Assign Ticket to an Agent"
                                        },
                                        "validateStatusError": false
                                    },
                                    {
                                        "id": "node-37ab01ce-de04-45bb-8823-a770d27521fe",
                                        "type": "node",
                                        "name": "普通节点",
                                        "path": [
                                            "3",
                                            "children",
                                            "1",
                                            "children",
                                            "0",
                                            "children",
                                            "0",
                                            "children",
                                            "1"
                                        ],
                                        "configuring": false,
                                        "data": {
                                            "name": "Set Ticket Status to Open"
                                        },
                                        "validateStatusError": false
                                    }
                                ],
                                "path": [
                                    "3",
                                    "children",
                                    "1",
                                    "children",
                                    "0",
                                    "children",
                                    "0"
                                ],
                                "configuring": false,
                                "data": {
                                    "name": "Is Agent available ?"
                                },
                                "validateStatusError": false
                            },
                            {
                                "id": "condition-beedb992-88eb-4215-837f-4c425decc021",
                                "type": "condition",
                                "name": "条件节点",
                                "children": [
                                    {
                                        "id": "node-47c997e4-4d05-4df4-ac69-8a4c1ed251cd",
                                        "type": "node",
                                        "name": "普通节点",
                                        "path": [
                                            "3",
                                            "children",
                                            "1",
                                            "children",
                                            "0",
                                            "children",
                                            "1",
                                            "children",
                                            "0"
                                        ],
                                        "configuring": false,
                                        "data": {
                                            "name": "Set Ticket's Agent to Unassigned"
                                        },
                                        "validateStatusError": false
                                    }
                                ],
                                "path": [
                                    "3",
                                    "children",
                                    "1",
                                    "children",
                                    "0",
                                    "children",
                                    "1"
                                ],
                                "configuring": false,
                                "data": {
                                    "name": "Is there no available agent?"
                                },
                                "validateStatusError": false
                            }
                        ],
                        "path": [
                            "3",
                            "children",
                            "1",
                            "children",
                            "0"
                        ]
                    }
                ],
                "path": [
                    "3",
                    "children",
                    "1"
                ],
                "configuring": false,
                "data": {
                    "name": "Is group configured ?"
                },
                "validateStatusError": false
            }
        ],
        "path": [
            "3"
        ]
    },
    {
        "id": "node-b106675a-5148-4a2e-aa86-8e06abd692d1",
        "type": "end",
        "name": "end",
        "path": [
            "4"
        ]
    }
  ];