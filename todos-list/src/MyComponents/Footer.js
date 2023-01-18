import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position: "sticky",
    bottom: "0vh",
    width: "100%",
    height : "5vh"
  }
  return (
    <footer className='bg-dark text-light text-center py-3 px-3 ' style={footerStyle}>
        Copyright &copy; TodoList.com
    </footer>
  )
}
