const initialData = {
    tasks: {
        "task-1": { id: "task-1", content: "Arrumar a entrada" },
        "task-2": { id: "task-2", content: "Arrumar sofá" },
        "task-3": { id: "task-3", content: "Descongelar fígado" },
        "task-4": { id: "task-4", content: "Fazer jantar" }
    },
    originColumn: ["originColumn"],
    columns: {
        "column-1": {
            id: "column-1",
            title: "To do",
            taskIds:["task-1", "task-2", "task-3", "task-4",]
        },
        "column-2": {
            id: "column-2",
            title: "In Progress",
            taskIds:[]
            },
        "column-3": {
            id: "column-3",
            title: "Done",
            taskIds:[]
                }
    },
    // Facilitate reordering of the columns
    columnOrder: ["column-1", "column-2", "column-3"] // this is the property that will be used to record the order of the columns
}

export default initialData