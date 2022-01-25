import { useMemo, ReactNode, FC, useCallback } from 'react'
import { useAccordion, AccordionContext } from './useAccordion'
/*
 * Wraps the contents of the Accordion
 * Provides context to contents of Accordion
 */

export type AccordionProps = {
  expanded?: boolean // if true all are expanded, false by default
  expandedIndex?: number | Array<number> // the id or ids of AccordionItems that are currently active
  allowMultiple?: number // if true multiple items can be expanded and hence it allows toggle, false by default
  onChange?: () => void // on state changes return back active AccordionItem props
  children: ReactNode
}

// useAccordion

export const Accordion: FC<AccordionProps> = ({ ...props }) => {
  const { ...context } = useAccordion(props)

  const ctx = useMemo(() => ({ ...context }), [context])

  return (
    <AccordionContext.Provider value={ctx}>
      {props.children}
    </AccordionContext.Provider>
  )
}

const updateSelectState = useCallback(
  (item: DropdownSelectedItem) => {
    selected.current = item
    setFocusedIndex(item.index)
  },
  [setFocusedIndex]
)

/**
 * <Accordion>
 *   <AI>
 *     <div>
 *       <Toggle>
 *         Hello
 *       </Toggle>
 *     </div>
 *     <Collapse/>
 *   </AI>
 * </Accordion>
 */
