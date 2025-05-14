import { useNavigate } from "react-router"
export function LoginPage() {
    const navigate = useNavigate()
    const onSubmit = () => {
       return navigate("/dashboard");
    }
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-8 h-screen bg-light-green flex justify-center items-center w-full">
                <form action=""  className="w-[400px] flex flex-col">
                    <legend className="text-2xl pb-4">Bienvenido</legend>
                    <fieldset className="fieldset">
                        <label className="fieldset-legend font-normal" htmlFor="user">Usuario</label>
                        <input id="user" type="text" placeholder="Nombre de Usuario" className="input rounded-full w-full" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="fieldset-legend font-normal" htmlFor="pass">Contraseña</label>
                        <input id="pass" type="password" placeholder="********" className="input rounded-full w-full" />
                    </fieldset>
                    <button onClick={() => onSubmit()} type="button" className="btn-block py-2 bg-dark-green text-white rounded-full font-light mt-4 cursor-pointer!">Iniciar Sesión</button>
                    <span className="text-wrap font-light pt-4 text-center">Si no tienes cuenta comunicate con el Administrador Para la apertura de tu cuenta</span>
                </form>
            </div>
            <div className="col-span-4 h-screen w-full bg-primary-green">
            </div>
            <div className='absolute right-[350px] top-[calc(50%-250px)]'>
                <div className='relative'>
                    <img src="/logo.svg" alt='logo' width={300} height={300} className='absolute right-16 top-12' />
                    <img src="/logobg.svg" alt='logobg' width={400} height={400} className='' />
                </div>
            </div>
        </div>
    )
}
