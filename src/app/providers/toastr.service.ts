import { Injectable, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';

@Injectable()
export class ToastrService {
  constructor(public toastr: ToastsManager) {}

  setVCR(vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  showToastr(messageType: 'warning' | 'success' | 'error' | 'info' | 'custom', params: any) {
    switch (messageType) {
      case 'warning':
        this.toastr.warning(params.msg);
        break;
      case 'success':
        this.toastr.success(params.msg);
        break;
      case 'error':
        this.toastr.error(params.msg);
        break;
      case 'info':
        this.toastr.info(params.msg);
        break;
      case 'custom':
        this.toastr.custom(params.msg, null, { enableHTML: true });
        break;
      default:
        break;
    }
  }
}
