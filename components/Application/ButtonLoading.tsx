import React from 'react'
import { Loader2Icon } from "lucide-react"
import { Button } from "@/components/ui/button"

export interface ButtonLoadingProps {
type?: "button" | "submit" | "reset"
text: string
loading: boolean
onClick?: () => void

}
const ButtonLoading = ({type,text,loading,onClick}:ButtonLoadingProps) => {
  return (
    <Button type={type}  disabled={loading} onClick={onClick}>
     {loading && <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />}
    {text}
    </Button>
  )
}

export default ButtonLoading









