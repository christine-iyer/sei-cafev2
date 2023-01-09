import LoginForm from "../../components/LoginForm/LoginForm"


export default function LoginPage(props){
    return(
        <main>
            <h1>Login Page</h1>
            <LoginForm setUser={props.setUser}/>


        </main>
    )
}