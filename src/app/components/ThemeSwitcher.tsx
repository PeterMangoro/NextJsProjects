"use client";

import {Select, SelectItem} from "@nextui-org/react";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const themes = [
    {
        'key':1,
        'label':'Light',
        'value':'light' 
    },
    {
        'key':2,
        'label':'Dark',
        'value':'dark' 
    }
  ]


  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select 
        label="Select Theme" 
        className="max-w-xs" 
      >
        {themes.map((theme) => (
          <SelectItem key={theme.key} onClick={()=> setTheme(theme.value)}>
            {theme.label}
          </SelectItem>
        ))}
      </Select>
      
    </div>
    </div>
    
  )
};