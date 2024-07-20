import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box sx={{
        margin:15,
        textAlign:'center',
        p:2,
        "& h2":{
          fontWeight:'bold',
          my:2,
          fontSize:'2rem'
        },
        "& p":{
          textAlign:'justify'
        },
        "@media (max-width:600px)":{
          marginTop:0,
          "& h2":{
            fontSize:'1.5rem'
          }
        }
        }}>
        <Typography variant="h2">Welcome to my Restaurant</Typography>
        <br/>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Dolorem, dolorum! Tempora fuga vero dolorem a quia illo vitae. 
          Asperiores natus officia nostrum deserunt, optio eligendi harum,
           dolor quaerat necessitatibus cum quas sit dignissimos eos similique 
           quidem veniam laboriosam sequi cupiditate illum voluptatem molestiae delectus aliquid.
            Blanditiis et dicta minus nesciunt distinctio officia mollitia adipisci! 
            Corporis minus sunt iusto alias id ipsum earum iure culpa atque. 
            Facere odio labore itaque voluptatibus aperiam deserunt quia dicta ipsum deleniti 
            libero minima ducimus qui, est fugiat. Nostrum, autem? Ullam necessitatibus soluta eaque quo.
             Ea, eius! Quam dolorum atque, officiis soluta distinctio officia optio? Illo.
        </p>
        <br/>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Tempore explicabo molestias corrupti! Assumenda dolorem et placeat
           corrupti reprehenderit tempore aut impedit labore laborum quasi quam 
           saepe doloremque recusandae odio, a modi animi dolore ut nulla laudantium?
            Nostrum quasi provident similique id, dolore mollitia dolores totam, 
            sequi magni at a delectus corporis, eius aperiam quae assumenda molestias
             ab illo reprehenderit expedita eaque. Libero enim repudiandae, 
             mollitia sequi repellat maiores tempora ipsam iure ipsum recusandae id 
             adipisci minus distinctio, dolorum odit modi asperiores necessitatibus, 
             dignissimos quasi! Voluptates iste enim laudantium molestias, 
             explicabo tenetur ducimus facilis voluptatibus odit fugit. 
             Consequuntur odio suscipit cum.
        </p>
      </Box>
    </Layout>
  )
}

export default About