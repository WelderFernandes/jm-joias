import { MdOutlineSpaceDashboard,MdOutlineCategory } from 'react-icons/md';
import { BsCart4 } from 'react-icons/bs'
import { BiCategoryAlt } from 'react-icons/bi'
import { RiUserShared2Line, RiUserReceived2Line } from 'react-icons/ri'

export const Data = [
    {
        name: 'Dashboard',
        icon: <BiCategoryAlt />,
        url: '/'
    },
    {
        name: 'Produtos',
        icon: <BsCart4 />,
        url: '/product'
    },
    {
        name: 'Categoria',
        icon: <MdOutlineCategory />,
        url: '/'
    },
    {
        name: 'Revendedor',
        icon: <RiUserShared2Line />,
        url: '/'
    },
    {
        name: 'Fornecedor',
        icon: <RiUserReceived2Line />,
        url: '/'
    }
  ]