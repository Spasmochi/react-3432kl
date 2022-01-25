import { Context, createContext, ReactNode, useMemo, useState, FC } from 'react'
import { AccordionProps } from './useAccordion'

const AccordionContext: Context<{
  openItem: string
  setOpenItem: any
}> = createContext({
  openItem: '',
  setOpenItem: null,
})

export const Accordion: FC<AccordionProps> = props => {
  const [openItem, setOpenItem] = useState('')

  const ctx = useMemo(() => ({ openItem, setOpenItem }), [openItem])

  return (
    <div>
      <AccordionContext.Provider value={ctx}>
        {props.children}
      </AccordionContext.Provider>
    </div>
  )
}
