"use client"
import {useEffect, useState} from "react"
import {useSelector} from "react-redux"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import {logout} from "@/actions/logout"
import {useSession} from "next-auth/react"
import Link from "next/link"
import ThemeSwitch from "./ThemeSwitch"
import {RxHamburgerMenu} from "react-icons/rx"
import {RxCross2} from "react-icons/rx"
import {useDispatch} from "react-redux"
import {toggleSidebar} from "@/lib/redux/features/sideBar/sideBarSlice"
import Image from "next/image"
import logo from "@/public/growthtoolslogo.png"
import {GoPlus} from "react-icons/go"
import searcbot from "@/public/searchBot.png"
import {useRouter} from "next/navigation"
import {RiLoginBoxLine} from "react-icons/ri"
import {PageOverlay} from "./pageOverlay"
import SearchDropDown from "../components/SearchDropDown"
export default function Header(props) {
  const session = useSession()
  const [showSignInModal, setShowSignInModal] = useState(false)
  const [showSignUpModal, setShowSignUpModal] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [isAuthenticated, setisAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const route = useRouter()

  const isVisible = useSelector((state) => state.sideBar.isVisible)

  useEffect(() => {
    session.data?.user ? setisAuthenticated(true) : setisAuthenticated(false)

    setLoading(false)
  }, [])

  const handleSignOut = () => {
    logout()
    setisAuthenticated(false)
    setLoading(false)
    setLoading(false)
  }

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar())
  }

  return (
    // <div className="header fixed sm:fixed xl:static left-0 top-0 right-0 h-[70px] w-full flex justify-between items-center   px-4 pr-4 z-10 bg-white dark:bg-black dark:border-b dark:border-b-dark-400">
    //   <Link href="/">
    //     <img src="https://copyui.com/favicon.ico" width="40px" />
    //   </Link>

    //   <div className="flex items-center justify-end sm:gap-2 gap-0 w-full ">
    //     {/* dark mode toggle */}
    //     <button
    //       className="py-2 text-sm sm:ml-2 text-black dark:text-white dark:hover:bg-dark-500  hover:bg-light-100 transition px-3 rounded-full"
    //       onClick={() => {
    //         setShowSearch(!showSearch);
    //       }}
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         viewBox="0 0 24 24"
    //         fill="currentColor"
    //         className="w-5 h-5"
    //       >
    //         <path
    //           fillRule="evenodd"
    //           d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
    //           clipRule="evenodd"
    //         />
    //       </svg>
    //     </button>

    //     <ThemeSwitch />

    //     {/* Render component according to auth status */}
    //     {loading ? (
    //       ""
    //     ) : (
    //       <div>
    //         <div className="flex h-fit w-fit font-[400] items-center justify-center">
    //           {!isAuthenticated ? (
    //             <>
    //               <button
    //                 className="py-1.5 sm:text-sm text-[8px] sm:ml-2 border border-1 border-light-200 text-black dark:border-dark-400 dark:text-dark-200 px-3 rounded-full"
    //                 onClick={() => {
    //                   setShowSignInModal(!showSignInModal);
    //                 }}
    //               >
    //                 Sign in
    //               </button>

    //               <button
    //                 className="py-1.5 text-sm sm:ml-2 bg-black text-white dark:bg-white dark:text-black px-3 rounded-full"
    //                 onClick={() => {
    //                   setShowSignUpModal(!showSignUpModal);
    //                 }}
    //               >
    //                 Sign up
    //               </button>
    //             </>
    //           ) : (
    //             <>
    //               <button
    //                 className="py-1.5 sm:text-sm text-[8px]  w-[45px] sm:w-full sm:ml-2 bg-black text-white dark:bg-white dark:text-black sm:px-3  rounded-full"
    //                 onClick={handleSignOut}
    //               >
    //                 Sign out
    //               </button>
    //               <Link
    //                 className="py-1.5 sm:text-sm text-[8px] ml-2 border border-1 border-light-200 text-black dark:border-dark-400 dark:text-dark-200 sm:px-3 px-1 rounded-full"
    //                 href="/dashboard"
    //               >
    //                 Dashboard
    //               </Link>
    //             </>
    //           )}
    //         </div>
    //       </div>
    //     )}
    //     <Link
    //       href=" /submit"
    //       className="py-1.5 sm:text-sm text-[8px] ml-2 border border-1 border-light-200 text-black dark:border-dark-400 dark:text-dark-200 sm:px-3 px-1 mr-1  rounded-full"
    //     >
    //       Submit
    //     </Link>
    //     <button
    //       onClick={handleToggleSidebar}
    //       className="block xl:hidden transition-transform duration-300 ease-in-out transform hover:scale-110"
    //     >
    //       {isVisible ? <RxCross2 size={25} /> : <RxHamburgerMenu size={25} />}
    //     </button>
    //   </div>

    //   {/* sign in component (modal) */}
    // <SignIn
    //   showModal={showSignInModal}
    //   setShowModal={setShowSignInModal}
    //   isAuthenticated={setisAuthenticated}
    // />
    //   {/* sign up component (modal) */}
    //   <SignUp
    //     showModal={showSignUpModal}
    //     setShowModal={setShowSignUpModal}
    //     isAuthenticated={setisAuthenticated}
    //   />

    //   {/* search component */}
    //   <Search showSearch={showSearch} setShowSearch={setShowSearch} />
    // </div>
    <>
      <div
        className={` sticky left-0 top-0 right-0 h-fit w-full flex justify-between items-center   bg-white dark:bg-black dark:border-b dark:border-b-dark-400 py-2 sm:pl-7    gap-2 pl-[4px] pr-[6px] ${
          showSearch === true ? "z-50" : "z-10"
        } border-b-[1px]`}
      >
        
        <Link href="/">
          <Image
            src={logo}
            width={90}
            className=" dark:text-white dark:bg-black "
          />
        </Link>

        <div className="flex items-center justify-end sm:gap-6 md:gap-2 gap-2 w-full h-full pb-2   ">
          {/* dark mode toggle */}
          <div className="  md:max-w-[430px] md:w-full w-fit h-[40px]   flex justify-end  rounded-3xl md:border pr-1 border-[#E5E7EB] focus:border-[3px] hover:border-[blue]">
            <input
              type="text"
              className="md:block hidden pl-4 md:text-lg text-sm outline-none w-full rounded-full bg-transparent satoshi-variable border-none "
              placeholder=" Search..."
            />
            <button
              className=" sm:px-[8px] sm:my-[2px] px-[8px] my-[4px]  text-sm  sm:ml-2 text-white bg-black  dark:text-white dark:hover:bg-dark-500  transition  rounded-full  "
              onClick={() => {
                setShowSearch(!showSearch)
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className=" sm:w-5 sm:h-5 w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="w-10 h-[10]">
            <ThemeSwitch />
          </div>

          <button
            onClick={() => {
              route.push("/dashboard")
            }}
            className=" bg-gradient-to-r from-[#164CD9] to-[#32AADD] inline-flex gap-2 rounded-full sm:max-w-[152px] md:w-full w-fit md:h-[40px] h-fit justify-center items-center sm:p-2  px-[8px] py-[6px]"
          >
            <Image src={searcbot} width={15} height={15} />
            <p className=" md:block hidden text-white text-sm">Try AI Search</p>
          </button>
          {/* Render component according to auth status */}
          <Link
            href=" /submit"
            className=" sm:text-sm text-[8px] ml-2 border border-1 border-black dark:border-white    rounded-full md:max-w-[140px] md:h-[40px] md:w-full w-fit inline-flex justify-center items-center h-fit px-[5px] py-[4px]"
          >
            <GoPlus size={20} className=" dark:text-white" />
            <p className="md:block hidden text-black dark:text-white font-medium clash-display">
              Submit tool
            </p>
          </Link>
          {loading ? (
            ""
          ) : (
            <div>
              <div className="flex h-fit w-full font-[400] items-center justify-center sm:block hidden">
                {!isAuthenticated ? (
                  <>
                    <button
                      className=" text-[8px] sm:text-sm font-medium sm:ml-2 bg-black text-white dark:bg-white dark:text-black md:h-[40px]  h-fit  md:w-[100px]  md:py-0  rounded-full  clash-display md:px-0 px-[8px] py-[6px]"
                      onClick={() => {
                        setShowSignInModal(!showSignInModal)
                      }}
                    >
                      <p className=" md:block hidden">Sign In</p>
                      <RiLoginBoxLine className=" md:hidden block" size={20} />
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="py-1.5 sm:text-sm text-[8px]  w-[45px] sm:w-full sm:ml-2 bg-black text-white dark:bg-white dark:text-black sm:px-3  rounded-full"
                      onClick={handleSignOut}
                    >
                      Sign out
                    </button>
                  </>
                )}
              </div>
            </div>
          )}

          <button
            onClick={handleToggleSidebar}
            className="block xl:hidden transition-transform duration-300 ease-in-out transform hover:scale-110"
          >
            {isVisible ? <RxCross2 size={25} /> : <RxHamburgerMenu size={25} />}
          </button>
        </div>

        {/* sign in component (modal) */}
        <SignIn
          showModal={showSignInModal}
          setShowModal={setShowSignInModal}
          showSignUpModal={showSignUpModal}
          setShowSignUpModal={setShowSignUpModal}
          isAuthenticated={setisAuthenticated}
        />
        {/* sign up component (modal) */}
        <SignUp
          showModal={showSignUpModal}
          setShowModal={setShowSignUpModal}
          showSignInModal={showSignInModal}
          setShowSignInModal={setShowSignInModal}
          isAuthenticated={setisAuthenticated}
        />

        {/* search component */}
        {showSearch && (
          <SearchDropDown open={showSearch} setOpen={setShowSearch} />
        )}
      </div>
      <PageOverlay visibility={showSearch} setToggleNav={setShowSearch} />
    </>
  )
}
