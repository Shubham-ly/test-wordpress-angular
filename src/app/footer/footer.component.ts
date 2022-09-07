import { Component, OnInit } from '@angular/core';
import { ResourceCategoryType } from 'types/resource-category';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  apiUrl = environment.apiUrl;
  resourceCategories: ResourceCategoryType[] = [];

  constructor() {}

  ngOnInit(): void {
    fetch(this.apiUrl + '/get-resource-categories')
      .then((res) => res.json())
      .then((data) => {
        this.resourceCategories = data;
      });
  }
}
