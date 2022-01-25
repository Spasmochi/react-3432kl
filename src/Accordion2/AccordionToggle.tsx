import { ReactNode, useContext } from 'react'
import { AccordionContext } from '../Accordion/useAccordion'

const useAccordionContext = () => useContext(AccordionContext)

export const AccordionHeader = ({
  id,
  children,
}: {
  id?: string
  children: ReactNode
}) => {
  const { setOpenItem } = useAccordionContext()
  return <div onClick={() => setOpenItem(id)}>{children}</div>
}
