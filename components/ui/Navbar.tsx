import Image from "next/image"
import NextLink from 'next/link'
import { Link, Spacer, Text, useTheme } from "@nextui-org/react"

export const Navbar = () => {

  const { theme } = useTheme()
  // console.log(theme?.colors.gray900.value)

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0px 20px',
      backgroundColor: '#11181C',
    }}>
      
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
        alt='Icono de la App'
        width={70}
        height={70}
      />
      
      <NextLink href='/' passHref>
        <Link>
          <Text color='white' h2>P</Text>
          <Text color='white' h3>ókemon</Text>
        </Link>
      </NextLink>


      <Spacer css={{ flex: 1 }}/>

      <NextLink href='/favorites' passHref>
        <Link>
          <Text color='white'>Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  )
}
