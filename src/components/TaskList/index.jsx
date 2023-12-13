import React from "react";
import TaskSkeleton from "./TaskSkeleton.jsx";
import axios from "axios";
import api from "../../../../Telegram Desktop/classwork/classwork/src/api/index.js";
import taskApi from "../../../../Telegram Desktop/classwork/classwork/src/api/tasks/index.js";

const TaskList = () => {
    const [tasks, setTasks] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [page, setPage] = React.useState(1);
    const divRef = React.useRef();
    React.useEffect(() => {
        const getData = async () => {
            try {
                const {data} = await taskApi.getTask(page);
                setTasks([...tasks, ...data]);
            } catch (e) {
                console.log(e);
            } finally {
                setIsLoading(false);
            }
        }
        getData();
    }, [page]);
    React.useEffect(() => {
        const options = {
            rootMargin: "0px",
            threshold: 1.0
        }
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setPage(page + 1);
            }
        }, options);
        if (divRef.current) {
            observer.observe(divRef.current);
        }
    }, [])
    const createTask = async () => {
        const newTask = {
            title: 'ice-creamer',
            description: 'Eat 10 kg ice-cream',
            dueDate: '2021-10-10',
            categories: [
                {
                    id: 1,
                    name: 'food'
                },
                {
                    id: 2,
                    name: 'sport'
                }
            ]
        }

        const task = await taskApi.createTask(newTask);
        setTasks([...tasks, task.data]);
    }
    return (
        <>
            <div className="flex flex-row flex-wrap gap-3">
                {
                    isLoading ? (
                            [...new Array(3)].map((item, i) => (
                                <TaskSkeleton key={i}/>
                            ))) :

                        tasks.map((t) => (
                                <div key={t.id} className="shadow border border-slate-300 w-[300px] p-4">
                                    <div className="flex flex-col gap-4 ">
                                        <h1>{t.title}</h1>
                                        <p>{t.description}</p>
                                        <p>{t.dueDate}</p>
                                    </div>
                                </div>
                            )
                        )
                }
                <button onClick={createTask}> Add new task!</button>

            </div>
            <div ref={divRef}></div>
        </>
    )
}

export default TaskList;