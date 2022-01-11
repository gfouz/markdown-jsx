import { useToastContext } from "../../context/toast/ToastContext";
import StyledToast from "./Toast.styled.js";

const Toast = () => {
  //destructuring the  object context.
  const { toast, deleteToast } = useToastContext();

  return (
    <>
    <StyledToast>
    
      {toast.map((item) => (
        <div className={item.class}>
          <button onClick= {()=>deleteToast(0)}>X</button>
          <h4>{item.duty}</h4>
          <p>{item.skills}</p>
        </div>
      ))}
    </StyledToast>
    </>
  );
};

export default Toast;
