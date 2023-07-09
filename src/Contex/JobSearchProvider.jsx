import React, { createContext, useContext, useState } from 'react'

export const SearchProvider=createContext();
const JobSearchProvider = ({children}) => {
  const [auth,setAuth]=useState({
    keywords:'',
    results:[]
  });  
  return (
        <>
                    <SearchProvider.Provider value={[auth,setAuth]}>
                                {children}
                    </SearchProvider.Provider>
        </>
  )


}
export const useSearch=()=> useContext(SearchProvider);//custom hooks...

export default JobSearchProvider;