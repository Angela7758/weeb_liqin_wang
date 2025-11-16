import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="logo">weeb</Link>

        {/* 桌面端导航 */}
        <nav className="nav-links desktop-only">
          <Link to="/">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login" className="btn-outline">Log In</Link>
          <button className="btn-primary">Join Now</button>
        </nav>

        {/* 移动端菜单按钮 */}
        <button
          className="burger mobile-only"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {/* 移动端下拉菜单 */}
      {open && (
        <nav className="mobile-menu mobile-only">
          <Link to="/" onClick={() => setOpen(false)}>About Us</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link to="/login" onClick={() => setOpen(false)}>Log In</Link>
        </nav>
      )}
    </header>
  )
}

export default Navbar
