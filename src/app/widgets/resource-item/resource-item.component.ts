import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ResourceCategory } from 'src/app/services/resource-service/resource.service';
import { Post } from 'types/post';

@Component({
  selector: 'resource-item',
  templateUrl: './resource-item.component.html',
  styleUrls: ['./resource-item.component.scss'],
})
export class ResourceItemComponent implements OnInit {
  @Input()
  resource!: Post;
  isLoading = true;

  category: ResourceCategory = {
    name: 'Notifications',
    slug: 'notifications',
  };
  maximizeVideo: boolean = false;
  datePipe = new DatePipe('en-Us');
  postDate: any = null;

  constructor() {}

  ngOnInit(): void {
    this.isLoading = true;
    console.log(this.resource.guid + '#toolbar=0&navpanes=0&scrollbar=0');
    // @ts-ignore;
    this.category = this.resource.categories;
    this.postDate = this.datePipe.transform(
      this.resource.post_date,
      'd-MMM-y h:mm a'
    );
    this.isLoading = false;
  }

  onViewDocClicked() {
    window.open(this.resource.guid, '_blank');
  }
}
