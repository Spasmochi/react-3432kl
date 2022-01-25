import { createContext, ReactNode, useContext } from 'react'

type ExpandedIndex = number | Array<number>

export type AccordionProps = {
  expanded?: boolean // if true all are expanded, false by default
  expandedIndex?: ExpandedIndex // the id or ids of AccordionItems that are currently active
  allowMultiple?: number // if true multiple items can be expanded and hence it allows toggle, false by default
  onChange?: () => void // on state changes return back active AccordionItem props
  children: ReactNode
  onToggle?(open: boolean): void
}

export type UseAccordionProps = AccordionProps

export const useAccordion = ({ onToggle: onToggleProp }: UseAccordionProps) => {
  const onToggle = () => true
  return { onToggle }
}

export type UseAccordionValue = ReturnType<typeof useAccordion>

type AccordionContext = Omit<UseAccordionValue, 'htmlProps' | 'descendants'>

/**
 * -------------------------------------------------------------------------------------------------
 * Create context for the root dropdown logic
 * -------------------------------------------------------------------------------------------------
 */
export const [AccordionContextProvider, useAccordionContext] =
  createContext<AccordionContext>({ name: 'AccordionContext' })
