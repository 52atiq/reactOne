import React, { Component, Fragment } from 'react'
import { Container ,Row,Col} from 'react-bootstrap'
import { BarChart ,Bar, ResponsiveContainer, XAxis,Tooltip} from 'recharts'

export default class Analysis extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
            data:[

              { Technology:'Java', Project:100 },
              { Technology:'Kotlin', Project:60 },
              { Technology:' Sql', Project:80 },
              { Technology:'Php', Project:87 },
              { Technology:'Css', Project:65 },
              { Technology:'Html', Project:90 },
              { Technology:'React', Project:86 },
              { Technology:'C++', Project:71 },
              { Technology:'Python', Project:67}
            ]
        }
    }
    

    render() {
        var blue =" rgba(0,115,230,0.8)"
        return (

           <Fragment>
               <Container className="text-center">
                   <h1 className="serviceMainTitle"> Technology Used</h1>
                   <Row>
                       <Col style={{width:'50%' , height:'300px'}} lg={6} md={12} sm={12} >
                           <ResponsiveContainer>
                           <BarChart width={100} height={300} data={this.state.data}>  
                           <XAxis dataKey="Technology" />
                           <Tooltip />
                              <Bar dataKey="Project" fill={blue}>   </Bar>
                           </BarChart>
                           </ResponsiveContainer>
                       
                       </Col>
                       <Col lg={6} md={12} sm={12}>
                           <p className="text-justify des" > 
                               Ipsum dolores rebum diam gubergren dolore gubergren. Ipsum consetetur duo duo at elitr erat sit ipsum, amet sit ea diam ipsum sea. Sed lorem amet vero clita dolor erat et, lorem justo eirmod at takimata nonumy amet accusam. Voluptua diam est voluptua et no sit magna. Ut lorem dolores consetetur invidunt labore takimata lorem, ut et magna ut sea no, sadipscing invidunt consetetur dolor et elitr duo diam diam, dolor amet amet dolore lorem est diam invidunt. Et sed sed ut labore justo sed no eos. Sed sadipscing sanctus et dolores. Ipsum sit lorem dolore aliquyam at dolor et diam ea, duo diam kasd sit at voluptua ut at sit, erat accusam labore ipsum amet stet invidunt diam amet, sanctus erat duo sanctus et voluptua ut, dolores erat sit magna diam sadipscing, nonumy magna magna erat erat. Et consetetur rebum dolore aliquyam amet et magna, sit amet labore accusam invidunt.
                           </p>

                       </Col>
                   </Row>

               </Container>
           </Fragment>
        )
    }
}
