import {Injectable} from "@angular/core";
import {NotificationsService} from "angular2-notifications";

@Injectable()
export class NotificationService {

  constructor(private notificationsService:NotificationsService) {}

  showErrorMessage(title:string, message:string) {
    this.notificationsService.error(title, message);
  }

  showSuccessMessage(title:string, message:string) {
    this.notificationsService.success(title, message);
  }
}
