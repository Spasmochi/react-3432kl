import { createContext, FC, useMemo, useState, useCallback } from 'react'

/*
 * Contains each item in the Accordion
 * Provides context to the children of the item
 */

const stub = (): never => {
  throw new Error('You forgot to wrap your component in <CognitoProvider>.')
}

export type AccordionItemProps = {
  id: string // the item id (either passed or set by Accordion parent with index)
  disabled?: boolean // if true item is not clickable, false by default
  expanded?: boolean // if true body is expanded, false by default
}

export const AccordionItem: FC<AccordionItemProps> = (props, children) => {
  const { disabled, expanded } = props

  const ctx = useMemo(() => ({ disabled, expanded }), [disabled, expanded])

  const AccordionItem = createContext({
    disabled,
    expanded,
    toggle: stub,
  })

  const toggle = useCallback(() => {
  
  }, []);

  return (
    <AccordionItem.Provider
      value={{
        ...ctx,
        toggle
      }}
    >
      <div id={props.id}>{children}</div>
    </AccordionItem.Provider>
  )
}



// <AI expanded={true} />

// ai = useAI();
// ai.toggle();

