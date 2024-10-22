import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Collector from "./Collector.jsx"

createRoot(document.getElementById("index")).render(
    <StrictMode>
    <Collector />
    </StrictMode>,
)
