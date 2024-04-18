import { Component } from "@angular/core";
import {
  Message,
  User,
  Attachment,
} from "@progress/kendo-angular-conversational-ui";

const attachments: Attachment[] = [
  {
    content: "Attachment One",
    contentType: "",
  },
  {
    content: "Attachment Two",
    contentType: "",
  },
];
@Component({
  selector: 'app-kendoattachment',
  templateUrl: './kendoattachment.component.html',
  styleUrls: ['./kendoattachment.component.css']
})
export class KendoattachmentComponent {
  public readonly user: User = {
    id: 1,
  };

  public readonly bot: User = {
    id: 0,
  };

  public messages: Message[] = [
    {
      author: this.bot,
      text: "A message with attachments carousel",
      attachments: attachments,
    },
    {
      author: this.bot,
      text: "A message with attachments list",
      attachmentLayout: "list",
      attachments: attachments,
    },
  ];
}
