import { ReactNode, useContext } from 'react'
import { AccordionContext } from '../Accordion/useAccordion'

const useAccordionContext = () => useContext(AccordionContext)

export const AccordionPanel = ({
  children,
  id,
}: {
  children: ReactNode
  id?: string
}) => {
  const { openItem } = useAccordionContext()
  return <div>{children}</div>
}
