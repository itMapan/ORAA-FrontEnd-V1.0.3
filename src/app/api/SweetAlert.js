import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const swTitle = "Information";
const swIcon = "info";
/**
 * Sweetalert Toaster
 */
export const SwalToast = withReactContent(Swal).mixin({
  toast: true,
  position: "top-end",
  timer: 2500,
  timerProgressBar: true,
  buttonsStyling: false,
  showConfirmButton: false,
  title: swTitle,
  icon: swIcon,
  didOpen: toast => {
    toast.addEventListener("mouseenter", SwalToast.stopTimer);
    toast.addEventListener("mouseleave", SwalToast.resumeTimer);
  }
});

/**
 * Sweetalert Alert-Box
 */
export const SwalAlert = withReactContent(Swal).mixin({
  customClass: {
    confirmButton: "btn btn-swal-confirm btn-md",
    cancelButton: "btn btn-swal-cancel btn-md"
  },
  title: swTitle,
  icon: swIcon,
  buttonsStyling: false,
  heightAuto: false,
  reverseButtons: true
});
