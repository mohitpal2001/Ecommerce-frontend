import React from 'react'
import { Loader2Icon } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { cn } from '@/src/components/ui/button' 

export interface ButtonLoadingProps {
type?: "button" | "submit" | "reset"
text: string
loading: boolean
className?: string;
onClick?: () => void

}
const ButtonLoading = ({type,text,loading,className,
    onClick
}:ButtonLoadingProps) => {
  return (
    <Button type={type}  disabled={loading} onClick={onClick} className={cn("",className)}>
     {loading && <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />}
    {text}
    </Button>
  )
}

export default ButtonLoading









