import { Children, cloneElement, ReactNode } from "react"

export const AccordionItem = ({
  children,
  id,
}: {
  children: ReactNode
  id: string
}) => {
  return (
    <div>
      {Children.map(children, (child: any) => cloneElement(child, { id }))}
    </div>
  )
}
