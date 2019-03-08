import { ToastOptions } from 'ng2-toastr';

export class CustomToastOption extends ToastOptions {
  animate = 'flyTop'; // you can override any options available
  newestOnTop = true;
  showCloseButton = false;
}
