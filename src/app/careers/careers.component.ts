import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JobType } from 'types/job';
import { JobService } from '../services/job-service/job.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss'],
})
export class CareersComponent implements OnInit {
  pageLoading = true;
  jobsLoading = true;
  apiUrl = environment.apiUrl;
  pageContent = '';
  currentPage = 1;
  totalPages = 0;
  jobs: JobType[] = [];

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.fetchCareersPage();
    this.fetchJobs();
  }

  async fetchCareersPage() {
    this.pageLoading = true;
    const res = await fetch(`${this.apiUrl}/get-page-body/careers`);
    const data = await res.json();
    this.pageContent = data.content.replace(/\\/g, '');
    this.pageLoading = false;
  }

  fetchJobs() {
    this.jobsLoading = true;
    this.jobService.getJobs({ page: this.currentPage }).subscribe((data) => {
      this.jobs = data.jobs;
      this.totalPages = data.max_num_pages;
      console.log(this.jobs);
    });
    this.jobsLoading = false;
  }

  setCurrentSelectedPage(page: number) {
    this.currentPage = page;
    this.fetchJobs();
  }
}
