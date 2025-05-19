import { createContext,useState } from "react";
import runChat from "../config/gemini.js"; 

export const Context = createContext();

const ContextProvider = (props) =>{
    const[input, setInput] = useState(""); // save the input from the user
    const[recentPrompt, setRecentPrompt] = useState(""); // save the recent prompt and display it on main component
    const[prevPrompts, setPrevPrompts] = useState([]); // save the previous prompts on the sidebar
    const[showResult, setShowResult] = useState(false);// hide the "Hello Dev" text and show the result
    const[loading, setLoading] = useState(false);// display loading animation
    const[resultData, setResultData] = useState(""); // display the result on the main component

    const onSent = async (prompt) => {
        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(input)
        const response = await runChat(input);
        setResultData(response);
        setLoading(false);
        setInput("");
    }
        
    const contextValue={
        prevPrompts,
        setPrevPrompts,
        onSent,
        recentPrompt,
        setRecentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        

    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider;