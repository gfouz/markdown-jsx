import { useState, createContext, useContext, useEffect } from "react";

const ToastContext = createContext();
/*this function may be invoked into any children 
  in order to access the context.
  El nombre todos los Hook personalizados debe comenzar
  con la palabra reservada "use" y luego camel-case de lo 
  contrario lanzara un error.*/
export const useToastContext = () => {
  return useContext(ToastContext);
};

export const ToastContextProvider = (props) => {
  const [toast, setToast] = useState([]);

  const initialState = {
    toast,
    addToast(properties) {
      setToast([...toast, properties]); 
    },
    deleteToast(delay) {
    if (toast.length > 0) {
      const timer = setTimeout(() => {
        setToast(toast.slice(1));
      }, delay);
      return () => clearInterval(timer);
    }
  }
  };

  useEffect(() => {
     //initialState.deleteToast(7000);
  }, [toast.length, toast]);

  return (
    <>
      <ToastContext.Provider value={initialState}>
        {props.children}
        {/* pendiente crear un componente que reciba el estado y sustituir el código
        siguiente por dicho componente */}
      </ToastContext.Provider>
    </>
  );
};

export default ToastContext;
