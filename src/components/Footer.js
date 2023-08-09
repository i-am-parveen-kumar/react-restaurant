import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/Footer.scss'

const Footer = () => {
  return (
    <footer className="mt-2 bg-blue-900 text-white">
      <div className="container mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm">
            We offer the best food and dining experience. Our passion for quality and flavor is what sets us apart.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li>
              <Link to="/" style={{ color: 'white' }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/" style={{ color: 'white' }}>
                Menu
              </Link>
            </li>
            <li>
              <Link to="/contact" style={{ color: 'white' }}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
          <address className="text-sm not-italic">
            <p>123 Food Street</p>
            <p>New York, NY 10001</p>
            <p>Email: support@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </address>
        </div>
      </div>
      <div className="text-center py-4 text-sm bg-blue-800">
        &copy; {new Date().getFullYear()} React Restaurant. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
