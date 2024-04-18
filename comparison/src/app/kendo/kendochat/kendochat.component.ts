import { Component } from "@angular/core";
import {
  Message,
  User,
  Attachment,
} from "@progress/kendo-angular-conversational-ui";

// const attachments: Attachment[] = [
//   {
//     content: "Attachment One",
//     contentType: "",
//   },
//   {
//     content: "Attachment Two",
//     contentType: "",
//   },
// ];
@Component({
  selector: 'app-kendochat',
  templateUrl: './kendochat.component.html',
  styleUrls: ['./kendochat.component.css']
})
export class KendochatComponent {
  public readonly user: User = {
    id: 1,
  };

  public readonly bot: User = {
    id: 0,
  };

  public messages: Message[] = [
    {
      author: this.bot,
      text: "Hi",
      // attachments: attachments,
    },
    {
      author: this.bot,
      text: "How are you",
      // attachmentLayout: "list",
      // attachments: attachments,
    },{
      author: this.user,
      text: "ljsa aaan asan",
      // attachmentLayout: "list",
      // attachments: attachments,
    },
  ];
}

