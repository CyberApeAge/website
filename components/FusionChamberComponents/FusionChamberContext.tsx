import { createContext, useState,  FC } from "react"

export interface ChamberContextType{
    selectedCards: string[];
    pushSelection: (url: string)=>void;
    popSelection: (url: string)=>void;
    selectedSlots:number[];
    setSlotSelect:(id: number)=>void;
    popSlotSelect:(id:number)=>void;
}
const defaultContextValue : ChamberContextType = {
    selectedCards:[],
    pushSelection:(url: string)=>{},
    popSelection:(url:string)=>{},
    selectedSlots:[],
    setSlotSelect:(id: number)=>{},
    popSlotSelect:(id:number)=>{}
}
export const ChamberCtx = createContext<ChamberContextType>(defaultContextValue );
 
export const ChamberProvider: FC = ({ children }) => {
    const [selectedCards, setCards] = useState<string[]>([]);
    const [selectedSlots, setSlots] = useState<number[]>([]);
    const pushSelection = (url: string)=>{
        setCards(list =>[...list, url]);
    }
    const popSelection = (url: string)=>{
        setCards(selectedCards.filter(item=>item !== url))
    }
    const setSlotSelect = (id: number)=>{
      console.log(id)
      setSlots(list=>[...list, id]);
      console.log(selectedSlots)
    }
    const popSlotSelect =(id:number)=>{
      setSlots(selectedSlots.filter(item=>item!==id))
      console.log(selectedSlots)
    }
    return (
      <ChamberCtx.Provider value={{selectedCards, pushSelection, popSelection, selectedSlots,setSlotSelect, popSlotSelect}}>
        {children}
      </ChamberCtx.Provider>
    )
  }
  
