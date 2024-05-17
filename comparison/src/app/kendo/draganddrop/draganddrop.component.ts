import { Component, Injectable, ViewEncapsulation } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpProgressEvent,
  HttpEventType,
  HttpResponse,
} from "@angular/common/http";
import { Observable, of, concat } from "rxjs";
import { delay } from "rxjs/operators";
import { WindowState } from "@progress/kendo-angular-dialog";
import {
  FileInfo,
  RemoveEvent,
  CancelEvent,
  FileRestrictions,
  SuccessEvent,
} from "@progress/kendo-angular-upload";
const photosUrl =
  "https://www.telerik.com/kendo-angular-ui-develop/components/uploads/assets/";
const fillMyFiles = (count: number): Array<FileInfo> => {
  const files = [];
  for (let i = 0; i < 0; i++) {
    files.push({
      name: `${i}.png`,
      src: `${photosUrl}${i}.png`,
    });
  }
  return files;
};

interface ImageInfo extends FileInfo {
  src?: string;
}
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-draganddrop',
  templateUrl: './draganddrop.component.html',
  styleUrls: ['./draganddrop.component.css']
})
export class DraganddropComponent {

  uploadSaveUrl = 'saveUrl'; // should represent an actual API endpoint
  uploadRemoveUrl = 'removeUrl'; // should represent an actual API endpoint
  public opened = true;
  public flag=false;
  public windowState: WindowState = "default";
  public openClose(isOpened: boolean): void {
    this.opened = isOpened;
  }


  public photosCount = 8;
 public myFiles: ImageInfo[]= fillMyFiles(this.photosCount);
  public myRestrictions: FileRestrictions = {
    allowedExtensions: [".jpg", ".png", ".xlsx", ".csv", ".doc", ".xls", ".xlsm", ".xlsb", ".pdf"],
  };

  public onUpload(ev: SuccessEvent): void {
    this.myFiles=[];
    if (this.myFiles && ev.files) {
      this.opened=true;
      this.flag=true;
      ev.files.forEach((file: FileInfo) => {
        if (
          file.rawFile &&
          !file.validationErrors &&
          ev.operation === "upload"
        ) {
          const reader = new FileReader();

          reader.onloadend = () => {
            this.myFiles.push(<FileInfo>{
              ...file,
              src: <string>reader.result,
            });
          };
          reader.readAsDataURL(file.rawFile);
        }
      });
    }
  }

  public onCancel(ev: CancelEvent): void {
    this.flag=false;
    ev.files.forEach((file: FileInfo) => {
      this.myFiles = this.myFiles.filter((f) => f.uid !== file.uid);
    });
  }

  public onRemove(ev: RemoveEvent): void {
    this.flag=false;
    ev.files.forEach((file: FileInfo) => {
      this.myFiles = this.myFiles.filter((f) => f.uid !== file.uid);
    });
  }
}
  
/*
  Mocked backend service.
  For further details, check
  https://angular.io/guide/http#writing-an-interceptor
*/

@Injectable()
export class UploadInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (req.url === "saveUrl") {
      const events: Observable<HttpEvent<unknown>>[] = [0, 30, 60, 100].map(
        (x) =>
          of(<HttpProgressEvent>{
            type: HttpEventType.UploadProgress,
            loaded: x,
            total: 100,
          }).pipe(delay(1000))
      );

      const success = of(new HttpResponse({ status: 200 })).pipe(delay(1000));
      events.push(success);

      return concat(...events);
    }

    if (req.url === "removeUrl") {
      return of(new HttpResponse({ status: 200 }));
    }

    return next.handle(req);
  }
}