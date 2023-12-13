import style from "./HelloWorld.module.scss"
export default function HelloWorld({message,id}) {

    return (
        <div>
            <div>
                {message}
                {id}
            </div>
            <div className={style.myApp}>
                Ceva!
            </div>
        </div>
    )
}