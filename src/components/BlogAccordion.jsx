import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
function BlogAccordion() {
    const [expanded,setExpanded] = React.useState({
        'panel1':false,
        'panel2':false,
        'panel3':false
      })
    
    
      
    
      const handleChange=(panel,isExpanded)=>{
        const newState = {...expanded}
        newState[panel]=isExpanded
        setExpanded(newState)
      }
  return (
    <div className=' text-left text-[20px]'>
            <Accordion  onChange={(e,isExpanded)=>handleChange('panel1',isExpanded)}>
              <AccordionSummary
                expandIcon={expanded.panel1 ?  <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus}/>  }
                aria-controls="panel1-content"
                id="panel1-header"
                className='font-bold text-xl'
              >
                Is it easy to build a website
              </AccordionSummary>
              <AccordionDetails>
                Yes
              </AccordionDetails>
            </Accordion >
            <Accordion onChange={(e,isExpanded)=>handleChange('panel2',isExpanded)}>
              <AccordionSummary
                expandIcon={expanded.panel2 ?  <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus}/>  }
                aria-controls="panel2-content"
                id="panel2-header"
                className='font-bold text-xl'
              >
                Can I create website witout knowing how to code?
              </AccordionSummary>
              <AccordionDetails>
                Yes!
              </AccordionDetails>
            </Accordion >
            <Accordion onChange={(e,isExpanded)=>handleChange('panel3',isExpanded)}>
              <AccordionSummary
                expandIcon={expanded.panel3 ?  <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus}/>  }
                aria-controls="panel3-content"
                id="panel3-header"
                className='font-bold text-xl'
              >
                How do I make my site mobile friendly?
              </AccordionSummary>
              <AccordionDetails>
                Injected humour, orrandomisedwords which don't look even slightly believable. If you are going to use a passage.
              </AccordionDetails>
              {/* <AccordionActions>
                <Button>Cancel</Button>
                <Button>Agree</Button>
              </AccordionActions> */}
            </Accordion>
        </div>
  )
}

export default BlogAccordion