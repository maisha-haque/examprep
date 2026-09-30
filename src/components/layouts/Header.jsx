import React from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import useCartStore from "../../store/usecartCount";


const Header = () => {

  const count = useCartStore((state) => state.count);

  return (



    <div className='py-3 bg-blue-200'>
      <Container>

        <Flex className="justify-between">

          <div>🐳🐚🐳</div>


          <div>
            <ul className='flex gap-2 text-blue-800 font-bold font-serif'>
              <li><Link to={"/"}>HOME</Link></li>
              {/* <li><Link to={"/about"}>ABOUT</Link></li> */}
              <li><Link to={"/shop"}>SHOP</Link></li>
              <li><Link to={"/contact"}>CONTACT</Link></li>
            </ul>
          </div>


          <div>
            
            <FaShoppingCart className='text-blue-900 text-2xl relative' />
            <span className="py-2 px-2 rounded-full absolute bg-white text-blue-700">{count}</span>
          </div>

        </Flex>

      </Container>
    </div>


  )
}

export default Header