import { Link } from 'react-router-dom'
import Svg1 from '../assets/images/icon-success.svg'
import Contactme from '../components/Contactme'
const Dashboard = () => {
  return (
    <>
      <div className=" bg-white md:bg-slate-800 flex justify-center items-center w-screen h-screen ">
        <div className="w-[90%] md:w-[50%] lg:w-[30%] xl:w-[20%] rounded-none sm:rounded-3xl bg-white px-0 md:px-6 lg:px-8 py-3 md:py-6 ">
          <img className="my-6 " src={Svg1} alt="" />
          <h1 className="mb-6 text-4xl font-bold ">
            Thanks for <br /> subscribing!
          </h1>
          <p className=" mb-6">
            A comfirmation email has been sent to
            <span className=" font-semibold"> ash@loremcompany.com.</span>
            Please open it and click the button inside to confirm your
            subscription.
          </p>

          <Link to={'/'}>
            <button className="w-[100%] rounded-md bg-black hover:bg-red-500 transition ease-in duration-500 text-white py-3 text-sm font-semibold sm:mb-7 mb-0 mt-40 md:mt-0">
              Dismiss Message
            </button>
          </Link>
        </div>
      </div>
      <Contactme />
    </>
  )
}

export default Dashboard
