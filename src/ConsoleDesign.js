import { useEffect } from "react";

const ConsoleDesign = () => {
  useEffect(() => {
    const design = `
██████╗  █████╗ ████████╗███████╗██╗    
██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██║     
██████╔╝███████║   ██║   █████╗  ██║       
██╔═══╝ ██╔══██║   ██║   ██╔══╝  ██║       
██║     ██║  ██║   ██║   ███████╗███████╗
╚═╝     ╚═╝  ╚═╝   ╚═╝   ╚══════╝╚══════╝
`;
    console.log(
      "%c" + design,
      "color: #3498db; font-weight: bold; font-size: 12px;"
    );
  }, []);

  return null; // This component doesn't render anything in the UI
};

export default ConsoleDesign;
