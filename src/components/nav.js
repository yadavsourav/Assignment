function Nav() {
    return (
      <div className="top-0 z-navbar relative" >
        <div id="main-nav-bar" className="h-11 bg-orange-700">     
          <div className="mx-auto h-full max-w-screen-2xl select-none text-white">
            <div className="flex h-full justify-between text-xs">
              <div className="flex items-stretch pl-4 text-sm lg:pl-8">
                <div className="shrink-0 self-center">
                  <img
                    className="mr-2 h-8 w-8 rounded-full"
                    src="https://acharyaprashant.org/images/ic_aplogo.png"
                    alt="Acharya Prashant"
                  />
                </div>
                <div className="hidden h-full flex-row items-stretch justify-center font-semibold md:flex">
                  <div
                    id="main-website-nav-item-home"
                    className="flex cursor-pointer items-center px-4 opacity-90 transition-opacity duration-300 ease-in-out hover:opacity-100"
                  >
                    <span className=" font-en antialiased">Home</span>
                  </div>
                  <div
                    id="main-website-nav-item-courses"
                    className="flex cursor-pointer items-center px-4 opacity-90 transition-opacity duration-300 ease-in-out hover:opacity-100 bg-orange-600"
                  >
                    <span className="font-en">Video Series</span>
                  </div>
                  <div
                    id="main-website-nav-item-books"
                    className="flex cursor-pointer items-center px-4 opacity-90 transition-opacity duration-300 ease-in-out hover:opacity-100"
                  >
                    <span className="font-en">His Books</span>
                  </div>
                  <div
                    id="main-website-nav-item-contribute"
                    className="flex cursor-pointer items-center px-4 opacity-90 transition-opacity duration-300 ease-in-out hover:opacity-100"
                  >
                    <span className="font-en">Donate</span>
                  </div>
                </div>
              </div>
              <div className="flex h-full content-center items-center justify-center md:space-x-3 lg:space-x-4 lg:pr-8">
  
  
  
  
                <div>
                  <div className="inline-flex cursor-pointer items-center py-4" id="main-website-main-nav-bar-cart-icon">
                    <div className="flex items-center pr-1">
                      <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" className="stroke-current">
                          <path fill="none" d="M1 1h1.556l.31 1.556m1.245 6.222h7.778L15 2.556H2.867M4.11 8.778 2.867 2.556M4.11 8.778 2.328 10.56a.778.778 0 0 0 .55 1.328h9.01m0 0a1.556 1.556 0 1 0 0 3.11 1.556 1.556 0 0 0 0-3.11Zm-6.221 1.555a1.556 1.556 0 1 1-3.111 0 1.556 1.556 0 0 1 3.11 0Z"></path>
                        </svg>
                        <div className="absolute bottom-1/2 left-1/2 flex h-4 w-4 items-center justify-center rounded-full text-xs ">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
  
  
  
                <div
                  id="main-website-navbar-language-selector"
                  className="inline-flex cursor-pointer items-center py-4 px-6 md:px-0"
                >
                  <div className="relative">
                    <div className="flex inline-flex items-center space-x-1 font-medium opacity-90 transition-opacity duration-300 ease-in-out hover:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="17"
                        viewBox="0 0 22 17"
                        className="fill-current"
                      >
                        <path d="M9.7 4.5v1.295H6.12v2.05h3.364V9.06H6.12v2.144H9.7v1.295H4.55V4.5H9.7Zm2.637 0 3.545 5.32h.053V4.5h1.476v7.998H16.1l-3.557-5.35h-.047v5.35H11.02V4.5h1.318ZM2.99 17h16.02c.997 0 1.745-.244 2.243-.732.499-.488.748-1.213.748-2.176V2.908c0-.963-.25-1.688-.748-2.176C20.754.244 20.006 0 19.01 0H2.99C2.007 0 1.263.244.758.732.253 1.22 0 1.945 0 2.908v11.184c0 .963.253 1.688.758 2.176.505.488 1.25.732 2.233.732Zm.069-1.648c-.446 0-.787-.116-1.023-.349-.236-.232-.355-.575-.355-1.027V3.024c0-.459.119-.805.355-1.037.236-.233.577-.349 1.023-.349h15.88c.446 0 .79.116 1.033.349.243.232.364.578.364 1.037v10.952c0 .452-.121.795-.364 1.027-.243.233-.587.35-1.033.35H3.06Z"></path>
                      </svg>
                      <div className="pt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9"
                          height="6"
                          viewBox="0 0 9 6"
                          className="fill-current"
                        >
                          <path d="m.354 1.354 3.792 3.792a.5.5 0 0 0 .708 0l3.792-3.792A.5.5 0 0 0 8.293.5H.707a.5.5 0 0 0-.353.854Z"></path>
                        </svg>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
                <div
                  id="main-website-navbar-contact-icon"
                  className="text-white hover:cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    className="fill-current"
                  >
                    <path d="M11.895 16c.708 0 1.314-.104 1.817-.313.503-.209.965-.548 1.388-1.017a1.27 1.27 0 0 0 .094-.103l.086-.103a2.93 2.93 0 0 0 .544-.81 1.98 1.98 0 0 0 .176-.785c0-.298-.086-.585-.257-.862-.171-.278-.44-.54-.806-.785l-2.382-1.665a2.048 2.048 0 0 0-1.17-.39c-.408-.003-.781.164-1.118.502l-.617.609c-.097.103-.193.159-.287.167a.49.49 0 0 1-.305-.09 8.1 8.1 0 0 1-.544-.416 18.5 18.5 0 0 1-1.332-1.205c-.206-.2-.405-.405-.596-.614a11.947 11.947 0 0 1-.527-.613 5.1 5.1 0 0 1-.394-.558.42.42 0 0 1-.095-.296.506.506 0 0 1 .163-.287l.609-.618c.343-.343.512-.719.51-1.128a1.985 1.985 0 0 0-.399-1.162L4.782 1.047C4.536.692 4.275.431 3.998.262A1.699 1.699 0 0 0 3.137 0C2.61-.01 2.08.223 1.543.704a.848.848 0 0 0-.108.09.648.648 0 0 1-.098.081c-.469.43-.809.897-1.02 1.403C.106 2.784 0 3.398 0 4.118c0 .784.153 1.612.458 2.484.306.872.762 1.76 1.367 2.664a18.027 18.027 0 0 0 2.237 2.685 18.605 18.605 0 0 0 2.674 2.217c.897.604 1.782 1.06 2.657 1.369.874.309 1.708.463 2.502.463Zm0-1.295c-.691.005-1.428-.146-2.211-.455a11.557 11.557 0 0 1-2.365-1.296 16.925 16.925 0 0 1-2.28-1.921 16.885 16.885 0 0 1-1.941-2.3A12.06 12.06 0 0 1 1.765 6.32c-.32-.798-.474-1.543-.462-2.235.005-.44.087-.847.244-1.218a2.64 2.64 0 0 1 .788-1.038c.026-.023.053-.046.082-.069.114-.097.233-.173.355-.227a.895.895 0 0 1 .365-.082c.251 0 .45.115.6.343l1.55 2.317a.663.663 0 0 1 .13.411c-.007.143-.075.28-.207.412l-.685.678c-.291.292-.437.6-.437.922 0 .323.1.625.3.905.223.31.515.67.878 1.081.363.412.707.78 1.033 1.107.228.223.48.462.754.716.274.255.546.496.814.725.269.229.503.418.703.566.28.2.581.3.904.3.323 0 .63-.148.921-.445l.677-.678c.132-.137.27-.208.416-.21a.69.69 0 0 1 .416.133L14.2 12.26c.12.08.206.171.257.274a.738.738 0 0 1 .078.335c0 .234-.103.474-.309.72a2.054 2.054 0 0 1-.137.155c-.269.314-.591.55-.968.708a3.384 3.384 0 0 1-1.226.253Z"></path>
                  </svg>
                </div>
                <div className="cursor-pointer pl-6 text-white md:hidden">
                  <div className="cursor-pointer rounded-md text-center transition-colors  duration-150 ">
                    <span className="font-en">Donate</span>
                  </div>
                </div>
                <div
                  id="main-website-right-menu-btn"  /* id */
                  className="inline-flex cursor-pointer items-center py-4 pl-6 pr-4 md:pl-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="18"
                    viewBox="0 0 14 12"
                    className="fill-current"
                  >
                    <path
                      
                      d="M13 10a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2h12Zm0-5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2h12Zm0-5a1 1 0 1 1 0 2H1a1 1 0 0 1 0-2h12Z"
                    ></path>
                  </svg>
                  <div className="hidden pl-2 lg:block">
                    <span className="font-en">Menu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    );
  }
  
  export default Nav;
  