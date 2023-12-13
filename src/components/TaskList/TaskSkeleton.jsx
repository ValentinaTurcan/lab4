import ContentLoader from "react-content-loader";

const TaskSkeleton = () => {
    return (
        <ContentLoader
            speed={2}
            width={300}
            height={354}
            viewBox="0 0 300 354"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="16" y="54" rx="3" ry="3" width="230" height="50" />
            <rect x="17" y="123" rx="3" ry="3" width="229" height="85" />
            <rect x="16" y="220" rx="3" ry="3" width="95" height="25" />
            <rect x="140" y="220" rx="3" ry="3" width="105" height="25" />
        </ContentLoader>
    )
}

export  default TaskSkeleton;